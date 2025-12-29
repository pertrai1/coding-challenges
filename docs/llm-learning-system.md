# LLM/Agents Learning System

Dynamic daily learning system that generates active recall sessions based on recent arXiv research papers.

## Overview

Instead of static questions, this system:

1. **Fetches recent papers** from arXiv in relevant categories (cs.CL, cs.AI, cs.LG)
2. **Extracts key concepts** from papers about LLMs, agents, prompt engineering, etc.
3. **Generates learning sessions** focused on understanding and critiquing current research
4. **Creates GitHub issues** automatically for tracking your learning journey

## Files

### Templates

- `.github/ISSUE_TEMPLATES/daily-learning-llm.md` - Enhanced template for LLM/agent topics

### Scripts

- `scripts/generate-llm-learning-topic.js` - Fetches papers from arXiv and generates topic metadata

### Automation

- `.github/workflows/daily-llm-learning.yml` - Daily GitHub Action to create learning issues

## Quick Start

### Manual Topic Generation

```bash
# Install dependencies
npm install xml2js

# Generate a random topic from recent arXiv papers
node scripts/generate-llm-learning-topic.js

# Output includes: paper title, URL, concept, research question, etc.
```

### Automated Daily Issues

The workflow runs automatically every day at 9 AM UTC, or you can trigger it manually:

1. Go to Actions tab in GitHub
2. Select "Daily LLM Learning Issue"
3. Click "Run workflow"

### Manual Issue Creation

If you want to create an issue manually with a specific paper:

```bash
# Generate topic
node scripts/generate-llm-learning-topic.js > topic.json

# Create issue using GitHub CLI
gh issue create \
  --title "Active Recall: $(jq -r '.FOCUS' topic.json)" \
  --body-file .github/ISSUE_TEMPLATES/daily-learning-llm.md \
  --label daily-learning,llm
```

## Learning Flow

### 1. Issue Created

A new issue is created with:

- Link to source arXiv paper
- Key concept to understand
- Research question from the paper
- Template structure for active recall

### 2. Active Recall (No Notes)

Work through sections **without** looking at the paper:

- Define the concept in your own words
- Identify failure modes
- Draw mental model from memory
- Explain causal mechanism
- Analyze trade-offs

### 3. Self-Assessment

Score yourself on 7 dimensions (0-4 scale):

- Conceptual clarity
- Mental model integrity
- Causal understanding
- Failure awareness
- Trade-off judgment
- Transfer ability
- Calibration & honesty

### 4. Delayed Recall

Return 24-72 hours later and check:

- What did you forget?
- What was oversimplified?
- What was actually wrong?

## Topic Areas

The system searches for papers related to:

- **LLMs & Language Models** - Architecture, training, optimization
- **Autonomous Agents** - Multi-agent systems, tool use, planning
- **Prompt Engineering** - In-context learning, instruction following
- **RAG & Retrieval** - Knowledge integration, memory systems
- **Reasoning** - Chain-of-thought, planning, problem-solving
- **Alignment & Safety** - RLHF, harmfulness, honesty
- **Evaluation** - Benchmarks, metrics, testing

## Learning Buckets

Topics are automatically classified into:

1. **Architecture** - Model design, attention mechanisms
2. **Training & Optimization** - Fine-tuning, gradient methods
3. **Prompting & Control** - Steering, instruction design
4. **Evaluation & Benchmarking** - Testing, metrics
5. **Safety & Alignment** - RLHF, harmful content
6. **Multi-Agent Systems** - Coordination, tool use
7. **Retrieval & Knowledge** - RAG, memory
8. **Reasoning & Planning** - Chain-of-thought, strategies

## Customization

### Change Search Terms

Edit `scripts/generate-llm-learning-topic.js`:

```javascript
const SEARCH_TERMS = [
  'LLM OR "large language model"',
  'your custom search term'
  // Add more...
];
```

### Change Schedule

Edit `.github/workflows/daily-llm-learning.yml`:

```yaml
on:
  schedule:
    - cron: '0 9 * * *' # Change time here
```

### Filter by Category

Edit the categories in `generate-llm-learning-topic.js`:

```javascript
const CATEGORIES = ['cs.CL', 'cs.AI', 'cs.LG'];
// Add: cs.NE (Neural Networks), cs.CV (Computer Vision), etc.
```

## arXiv API

The system uses the [arXiv API](http://arxiv.org/help/api/index) to fetch papers.

### Query Syntax

- `cat:cs.CL` - Category filter
- `AND`, `OR`, `NOT` - Boolean operators
- `"exact phrase"` - Phrase matching
- `au:author` - Author search
- `ti:title` - Title search

### Categories Used

- `cs.CL` - Computation and Language
- `cs.AI` - Artificial Intelligence
- `cs.LG` - Machine Learning

### Rate Limits

- 1 request per 3 seconds
- Maximum 100 results per query

## Learning Principles

This system implements:

1. **Active Recall** - Retrieve from memory before checking sources
2. **Spaced Repetition** - Delayed recall after 24-72 hours
3. **Calibration Training** - Track confidence vs actual understanding
4. **Falsification** - Design experiments to prove yourself wrong
5. **Transfer Learning** - Apply concepts across domains
6. **Causal Models** - Understand mechanisms, not just correlations

## Troubleshooting

### No papers found

- Check your internet connection
- Verify arXiv API is accessible: <http://export.arxiv.org/api/query>
- Try broader search terms

### Template variables not replaced

- Ensure you're using the correct template file
- Check that all environment variables are set in the workflow

### Script errors

- Install dependencies: `npm install xml2js`
- Check Node.js version (requires v18+)
- Review error messages for specific issues

## Examples

### Example Generated Topic

```json
{
  "TOPIC": "ReAct: Synergizing Reasoning and Acting in Language Models",
  "PAPER_TITLE": "ReAct: Synergizing Reasoning and Acting in Language Models",
  "PAPER_URL": "http://arxiv.org/abs/2210.03629",
  "PAPER_DATE": "2022-10-07",
  "BUCKET": "Multi-Agent Systems",
  "FOCUS": "ReAct paradigm",
  "CONCEPT": "ReAct paradigm",
  "RESEARCH_QUESTION": "Can language models interleave reasoning traces with task-specific actions?",
  "SYSTEM_TYPE": "Agent System",
  "CONFIDENCE": "50",
  "DATE": "2025-12-29"
}
```

### Example Learning Session

See issues labeled `daily-learning` and `llm` for real examples.

## Benefits

1. **Stay Current** - Learn from papers published in the last few weeks
2. **Deep Understanding** - Active recall forces real comprehension
3. **Pattern Recognition** - Exposure to diverse approaches and techniques
4. **Calibration** - Track your confidence vs actual knowledge
5. **Research Skills** - Practice reading and critiquing papers
6. **Spaced Learning** - Automatic scheduling prevents cramming

## Future Enhancements

Potential additions:

- Filter by author or institution
- Prioritize highly-cited papers
- Track learning streaks
- Generate related problem sets
- Auto-schedule delayed recalls
- Integration with paper reading lists
