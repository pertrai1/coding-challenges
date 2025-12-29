#!/usr/bin/env node

/**
 * Generate daily learning topics from recent arXiv papers
 *
 * Fetches papers from arXiv API in areas: LLMs, agents, prompt engineering
 * Categories: cs.CL, cs.AI, cs.LG
 *
 * Usage:
 *   node scripts/generate-llm-learning-topic.js
 *
 * Output:
 *   JSON object with env variables for the issue template
 */

import https from 'https';
import { parseString } from 'xml2js';

// Configuration
const ARXIV_API = 'http://export.arxiv.org/api/query';
const CATEGORIES = ['cs.CL', 'cs.AI', 'cs.LG'];
const SEARCH_TERMS = [
  'LLM OR "large language model"',
  'agents OR "autonomous agents"',
  '"prompt engineering" OR prompting',
  'RAG OR "retrieval augmented"',
  'reasoning OR "chain of thought"',
  'alignment OR RLHF',
  '"in-context learning"',
  'tool use OR "function calling"'
];

const BUCKETS = [
  'Architecture',
  'Training & Optimization',
  'Prompting & Control',
  'Evaluation & Benchmarking',
  'Safety & Alignment',
  'Multi-Agent Systems',
  'Retrieval & Knowledge',
  'Reasoning & Planning'
];

/**
 * Build arXiv query string
 */
function buildQuery() {
  const randomTerm =
    SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)];
  const categoryFilter = CATEGORIES.map((cat) => `cat:${cat}`).join(' OR ');

  return `(${randomTerm}) AND (${categoryFilter})`;
}

/**
 * Fetch papers from arXiv API
 */
function fetchPapers(query, maxResults = 20) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({
      search_query: query,
      start: 0,
      max_results: maxResults,
      sortBy: 'submittedDate',
      sortOrder: 'descending'
    });

    const url = `${ARXIV_API}?${params}`;

    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          parseString(data, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

/**
 * Extract key concept from paper abstract
 */
function extractConcept(abstract) {
  // Simple extraction heuristics
  const patterns = [
    /we (propose|present|introduce) ([^,.]+)/i,
    /([A-Z][A-Za-z-]+) (?:is|are) (?:a|an) (?:novel|new) (method|approach|technique|framework)/i,
    /(method|approach|technique|framework) (?:called|named) ([A-Z][A-Za-z-]+)/i
  ];

  for (const pattern of patterns) {
    const match = abstract.match(pattern);
    if (match) {
      return match[2] || match[1];
    }
  }

  // Fallback: extract first capitalized technical term
  const technicalTerms =
    abstract.match(/\b[A-Z][a-z]+(?:-[A-Z][a-z]+)*\b/g) || [];
  return technicalTerms[0] || 'Core Mechanism';
}

/**
 * Classify paper into bucket
 */
function classifyBucket(title, abstract) {
  const text = (title + ' ' + abstract).toLowerCase();

  if (text.match(/architecture|model|transformer|attention/))
    return 'Architecture';
  if (text.match(/training|optimization|fine-tun|gradient/))
    return 'Training & Optimization';
  if (text.match(/prompt|instruction|control|steer/))
    return 'Prompting & Control';
  if (text.match(/benchmark|evaluat|metric|test/))
    return 'Evaluation & Benchmarking';
  if (text.match(/safety|alignment|rlhf|harmful|honest/))
    return 'Safety & Alignment';
  if (text.match(/multi-agent|agent|tool|action/)) return 'Multi-Agent Systems';
  if (text.match(/retrieval|rag|knowledge|memory/))
    return 'Retrieval & Knowledge';
  if (text.match(/reasoning|thought|planning|strategy/))
    return 'Reasoning & Planning';

  return BUCKETS[Math.floor(Math.random() * BUCKETS.length)];
}

/**
 * Extract research question from abstract
 */
function extractResearchQuestion(abstract) {
  // Look for question patterns
  const questionMatch = abstract.match(/(?:How|What|Why|Can|Does) [^.?]+\?/);
  if (questionMatch) return questionMatch[0];

  // Look for problem statements
  const problemMatch = abstract.match(
    /(?:challenge|problem|question) (?:is|of) ([^.]+)/i
  );
  if (problemMatch) return `How to address: ${problemMatch[1].trim()}?`;

  // Fallback: extract first sentence as implicit question
  const firstSentence = abstract.split(/[.!?]/)[0];
  return `${firstSentence.trim()}?`;
}

/**
 * Select a paper and generate topic metadata
 */
async function generateTopic() {
  try {
    const query = buildQuery();
    console.error(`Searching arXiv: ${query}`);

    const result = await fetchPapers(query);

    if (!result.feed || !result.feed.entry) {
      throw new Error('No papers found');
    }

    const papers = Array.isArray(result.feed.entry)
      ? result.feed.entry
      : [result.feed.entry];

    // Select a random recent paper
    const paper =
      papers[Math.floor(Math.random() * Math.min(papers.length, 10))];

    const title = paper.title[0].replace(/\s+/g, ' ').trim();
    const abstract = paper.summary[0].replace(/\s+/g, ' ').trim();
    const url = paper.id[0];
    const published = paper.published[0].split('T')[0];

    const concept = extractConcept(abstract);
    const bucket = classifyBucket(title, abstract);
    const researchQuestion = extractResearchQuestion(abstract);

    // Determine system type
    const systemTypes = [
      'Agent System',
      'Training Pipeline',
      'Inference System',
      'Evaluation Framework'
    ];
    const systemType =
      systemTypes[Math.floor(Math.random() * systemTypes.length)];

    // Generate output
    const output = {
      TOPIC: title.substring(0, 100),
      PAPER_TITLE: title,
      PAPER_URL: url,
      PAPER_DATE: published,
      BUCKET: bucket,
      FOCUS: concept,
      CONCEPT: concept,
      RESEARCH_QUESTION: researchQuestion,
      SYSTEM_TYPE: systemType,
      CONFIDENCE: '50',
      DATE: new Date().toISOString().split('T')[0]
    };

    console.log(JSON.stringify(output, null, 2));

    // Also output as env format for GitHub Actions
    console.error('\n--- GitHub Actions format ---');
    for (const [key, value] of Object.entries(output)) {
      console.error(`${key}=${value}`);
    }
  } catch (error) {
    console.error('Error generating topic:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTopic();
}

export { generateTopic, fetchPapers };
