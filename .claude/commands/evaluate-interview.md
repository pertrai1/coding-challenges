# Evaluate Interview Command

Generate a structured rubric from an interview transcript.

## Usage

This evaluator prompt analyzes interview transcripts and generates completed rubrics using the INTERVIEW_RUBRIC_TEMPLATE.md format.

## Input

Provide one of:
1. A transcript file path: `interviews/transcript-YYYY-MM-DD-{candidate}-{type}.txt`
2. Pasted transcript content directly

## Output

A completed rubric file saved to: `interviews/interview-rubric-YYYY-MM-DD-{candidate}-{type}.md`

## Evaluation Process

1. **Read the transcript** carefully, noting specific examples
2. **Score each category** (1-5) with detailed justification:
   - **Problem Solving**: Algorithm discovery, optimization, data structure choices, help needed
   - **Coding**: Correctness, organization, naming, engineering principles
   - **Verification**: Clarifying questions, edge cases, testing, bug identification
   - **Communication**: Clarity, thinking aloud, responsiveness, articulation
3. **Provide overall recommendation**: Recommend / Lean Recommend / Neutral / Lean No / Do Not Recommend
4. **Include specific quotes** and observations from the transcript

## Scoring Guide

- **5 (Exceptional)**: Exceeds expectations, demonstrates mastery
- **4 (Strong)**: Meets all expectations, minor areas for growth
- **3 (Adequate)**: Meets most expectations, some gaps
- **2 (Below Expectations)**: Significant gaps, needs improvement
- **1 (Poor)**: Did not meet basic expectations

## Information Required

Before generating the rubric, confirm:
- Candidate name (for filename)
- Interview type (coding/systems/behavioral)
- Problem given (if not clear from transcript)
- Any additional context

## Template Reference

Use the structure from `INTERVIEW_RUBRIC_TEMPLATE.md` for the output format.

## Note

This is typically run automatically by the orchestrator when `--auto-eval` is enabled, but can also be invoked manually to evaluate transcripts from audio interviews conducted on Claude.ai.
