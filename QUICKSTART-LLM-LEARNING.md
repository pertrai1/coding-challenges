# Quick Start: LLM Learning System

Get started with dynamic learning topics from arXiv research papers in under 5 minutes.

## What This Does

Automatically generates daily learning sessions based on the latest research papers about:

- Large Language Models (LLMs)
- Autonomous Agents
- Prompt Engineering
- RAG & Retrieval
- Reasoning & Planning
- Safety & Alignment

Each session includes active recall exercises, self-assessment rubrics, and delayed recall tracking.

## Setup (One-Time)

### 1. Install Dependencies

```bash
cd /Users/robsimpson/Repos/coding-challenges
npm install xml2js
```

### 2. Test the System

```bash
./scripts/llm-learning.sh test
```

You should see:

```text
✓ All dependencies found
✓ arXiv API accessible
✓ Generated topic: [Paper Title]
✓ All tests passed!
```

## Usage

### Option 1: Generate a Topic (View Only)

See what paper and concept you'd study today:

```bash
./scripts/llm-learning.sh generate
```

Output example:

```json
{
  "TOPIC": "Constitutional AI: Harmlessness from AI Feedback",
  "PAPER_TITLE": "Constitutional AI: Harmlessness from AI Feedback",
  "PAPER_URL": "http://arxiv.org/abs/2212.08073",
  "BUCKET": "Safety & Alignment",
  "FOCUS": "Constitutional AI",
  "RESEARCH_QUESTION": "Can we train helpful, harmless AI without human feedback labels?"
}
```

### Option 2: Create a GitHub Issue (Recommended)

Generate a topic AND create a GitHub issue for tracking:

```bash
./scripts/llm-learning.sh create
```

This will:

1. Fetch a recent paper from arXiv
2. Extract the key concept
3. Create a GitHub issue with the full learning template
4. Open the issue in your browser

### Option 3: Automated Daily Issues

The system can create issues automatically every day.

**Enable the workflow:**

1. The workflow is already configured in `.github/workflows/daily-llm-learning.yml`
2. It runs daily at 9 AM UTC
3. No setup needed - it will start running automatically

**Manual trigger:**

1. Go to: <https://github.com/robsimpson/coding-challenges/actions>
2. Click "Daily LLM Learning Issue"
3. Click "Run workflow"

## Learning Workflow

### Day 1: Active Recall

1. **Issue created** with paper link and concept
2. **Close the paper** (don't read it yet!)
3. **Fill out the template** from memory:
   - Define the concept in your own words
   - Identify failure modes
   - Draw the architecture/system
   - Explain the mechanism causally
   - Analyze trade-offs
4. **Self-assess** (0-4 on each dimension)
5. **Now read the paper** and compare

### Day 2-3: Delayed Recall

1. Return to the issue 24-72 hours later
2. Fill out "Delayed Recall" section:
   - What did you forget?
   - What was oversimplified?
   - What was wrong?

### Review

Comment on your issue with insights, or close it when complete.

## Examples

### Example 1: Quick Daily Practice

```bash
# Morning: Generate today's topic
./scripts/llm-learning.sh create

# Work through active recall (30-45 min)
# Read the paper and compare (30 min)
# Return in 2 days for delayed recall (10 min)
```

### Example 2: Deep Dive

```bash
# Generate topic
./scripts/llm-learning.sh create

# Spend 2-3 hours:
# - Read the paper thoroughly
# - Implement a minimal version
# - Run experiments
# - Document findings in issue
```

### Example 3: Weekly Batch

```bash
# Monday: Create 5 issues for the week
for i in {1..5}; do
    ./scripts/llm-learning.sh create
    sleep 5  # Avoid rate limits
done

# Work through one per day
# Review all on weekend
```

## Customization

### Focus on Specific Topics

Edit `scripts/generate-llm-learning-topic.js`:

```javascript
const SEARCH_TERMS = [
  'retrieval augmented generation', // Focus on RAG
  'agent planning' // Focus on agents
  // Comment out others
];
```

### Change Daily Time

Edit `.github/workflows/daily-llm-learning.yml`:

```yaml
schedule:
  - cron: '0 14 * * *' # 2 PM UTC = 9 AM EST
```

### Filter by Recency

In `generate-llm-learning-topic.js`, change the date filter:

```javascript
// Only papers from last 7 days
const params = new URLSearchParams({
  search_query: query,
  start: 0,
  max_results: 20,
  sortBy: 'submittedDate',
  sortOrder: 'descending'
});
```

## Tips for Effective Learning

### Before Reading the Paper

1. **Set a timer** (30-45 min for active recall)
2. **Write in complete sentences** (forces clarity)
3. **Draw diagrams from memory** (reveals gaps)
4. **Be honest about confidence** (calibration matters)

### While Reading the Paper

1. **Mark surprises** (What did you get wrong?)
2. **Note key insights** (What makes this work?)
3. **Identify assumptions** (What could break?)
4. **Find related work** (What patterns recur?)

### After Delayed Recall

1. **Track patterns in errors** (What do you consistently forget?)
2. **Update mental models** (How has understanding shifted?)
3. **Link concepts** (How does this connect to previous topics?)

## Troubleshooting

### "No papers found"

Check internet connection and try:

```bash
curl "http://export.arxiv.org/api/query?search_query=cat:cs.CL&max_results=1"
```

### "GitHub CLI not found"

Install GitHub CLI:

```bash
brew install gh           # macOS
# or
sudo apt install gh       # Linux
```

Then authenticate:

```bash
gh auth login
```

### "xml2js not found"

```bash
cd /Users/robsimpson/Repos/coding-challenges
npm install xml2js
```

### Papers not relevant

The system randomly samples from recent papers. Run the script multiple times:

```bash
./scripts/llm-learning.sh generate
./scripts/llm-learning.sh generate
./scripts/llm-learning.sh generate
```

Pick the most interesting one and create the issue manually.

## Next Steps

1. **Run your first session**: `./scripts/llm-learning.sh create`
2. **Set up daily automation**: Workflow is already configured
3. **Track your progress**: Review issues weekly
4. **Share insights**: Comment on issues with discoveries

For detailed documentation, see: `docs/llm-learning-system.md`

## Benefits You'll See

- **Stay current** with latest research (papers from last few weeks)
- **Deep understanding** through active recall and delayed testing
- **Calibration** by tracking confidence vs actual knowledge
- **Pattern recognition** across different approaches and techniques
- **Research skills** by practicing paper reading and critique

Start now: `./scripts/llm-learning.sh create`
