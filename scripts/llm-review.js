#!/usr/bin/env node

import fs from 'fs';
import OpenAI from 'openai';

const MAX_OUTPUT_TOKENS = 500;
const MAX_GITHUB_COMMENT_LENGTH = 4000;

/*
  Usage:
    node llm-review.js issue.json > review.md

  Preconditions:
    - OPENAI_API_KEY is set
    - issue.json was produced by:
        gh issue view <num> --json title,body,comments
*/

async function main() {
  if (process.argv.length < 3) {
    console.error('Usage: node llm-review.js <issue.json>');
    process.exit(1);
  }

  const issuePath = process.argv[2];

  if (!fs.existsSync(issuePath)) {
    console.error(`Issue file not found: ${issuePath}`);
    process.exit(1);
  }

  const issue = JSON.parse(fs.readFileSync(issuePath, 'utf8'));

  if (
    !issue.body ||
    typeof issue.body !== 'string' ||
    issue.body.trim().length < 50
  ) {
    console.error(
      'Issue body is too short or invalid — nothing meaningful to review.'
    );
    process.exit(1);
  }

  const REVIEW_PROMPT = `
You are a senior professor reviewing a learning artifact.

Your role is to evaluate thinking quality, not to teach, rewrite, or add new content.

Context:
- The artifact was written from memory before verification.
- The author is explicitly testing beliefs and assumptions.
- Incorrect or incomplete reasoning is expected and valuable.

STRICT RULES:
- Do NOT rewrite the artifact.
- Do NOT add new concepts.
- Do NOT correct terminology directly.
- Do NOT increase the author’s confidence.
- Do NOT fill missing sections.
- Do NOT suggest additional reading.

Your job is to surface:
- Conceptual drift
- Misalignment with the stated Focus
- Hidden assumptions
- Missing failure surfaces
- Calibration quality
- Links to related reseach papers

Review the artifact using ONLY the following structure.
Do not add sections.

---

### 1. What Was Done Well
(Call out specific strengths in reasoning, structure, or calibration.)

### 2. Where the Thinking Drifted
(Identify where the response stopped addressing the stated Focus.)

### 3. One Key Misconception
(Name the most important incorrect or mis-scoped belief, without fixing it.)

### 4. One Next Thinking Step
(Describe a single mental shift or question the author should pursue next.)

### 5. Calibration Feedback
(Comment on whether confidence matches demonstrated understanding.)

### 6. Confidence Delta Prompt
Based on the artifact, answer:
- Does the author appear overconfident, underconfident, or well-calibrated?
- Do NOT assign a numeric score.

### 7. External Research
(Share any research that has been conducted on the topic.)

---

Artifact to Review:

${issue.body}
`.trim();

  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set.');
    process.exit(1);
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  let responseText;

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: REVIEW_PROMPT
        }
      ],
      max_tokens: MAX_OUTPUT_TOKENS
    });

    responseText = response.choices[0]?.message?.content?.trim();
  } catch (err) {
    console.error('LLM request failed:', err.message || err);
    if (err.status === 429) {
      console.error('Rate limit exceeded. Try again later.');
    } else if (err.status === 401) {
      console.error('Invalid API key.');
    }
    process.exit(1);
  }

  if (!responseText) {
    console.error('LLM returned empty response.');
    process.exit(1);
  }

  if (responseText.length > MAX_GITHUB_COMMENT_LENGTH) {
    console.error('Response too long — aborting.');
    process.exit(1);
  }

  const output = `
## Learning Review

${responseText}

---

*This review evaluates thinking structure and calibration.
It does not assess correctness.*
`.trim();

  console.log(output);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
