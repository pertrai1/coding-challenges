# Coding Challenges Documentation

## Overview

Comprehensive documentation for learning data structures, algorithms, frontend engineering, and system design through hands-on problem solving.

## Documentation Structure

### 📚 Guides

- **[Pólya-Inspired Quickstart](./CODING_QUICKSTART.md)**: Structured problem-solving framework
- **[Testing Guide](./TESTING.md)**: Using Vitest for testing solutions
- **[Code Quality Guide](./CODE_QUALITY.md)**: Quality automation and analysis system
- **[Solution Template](./SOLUTION_TEMPLATE.md)**: Template for documenting solutions
- **[LLM Learning System](./llm-learning-system.md)**: Active recall learning from research papers

### 🎯 Platform Guides

- **[LeetCode Guide](./platforms/leetcode.md)**: DSA problem-solving strategies
- **[GreatFrontEnd Guide](./platforms/greatfrontend.md)**: Frontend engineering best practices

### 🧩 Techniques

Core algorithmic patterns and techniques:

- **[Hash Lookup](./techniques/HASH_LOOKUP.md)**: O(1) lookups with hash tables
- **[Two Pointers](./techniques/TWO_POINTERS.md)**: Efficient array traversal patterns
- **[Sliding Window](./techniques/SLIDING_WINDOW.md)**: Subarray/substring optimization
- **[Gradient Descent](./techniques/ai-ml/GRADIENT_DESCENT.md)**: ML optimization technique

More techniques available in the [techniques/](./techniques/) directory.

### 📖 Topics

Guides organized by problem domain:

- **[AI/LLM Problems](./topics/ai-llm.md)**: Algorithms mapping to generative AI concepts
- **[Math Problems](./topics/math.md)**: Number theory and mathematical algorithms
- **[Graph Algorithms](./topics/)**: DFS, BFS, shortest paths, topological sort

More topics in the [topics/](./topics/) directory.

### 📊 Analysis

Detailed problem breakdowns in [analysis/](./analysis/):

- Pattern identification
- Complexity analysis
- Key insights and intuition
- Alternative approaches
- Related problems
- Common pitfalls

### 🎤 Interviews

Mock interview resources in [interviews/](./interviews/):

- **[Interview Workflow](./interviews/INTERVIEW_WORKFLOW.md)**: Conduct AI-assisted interviews
- Interview rubrics and evaluations
- Practice session logs

### 🔍 Reviews

Code review documentation in [reviews/](./reviews/):

- Multi-agent code reviews
- Performance analysis
- Optimization suggestions
- Pattern recognition insights

## Data Structures and Algorithms Problem Solving Techniques

### Hash Lookup Technique

- Use hash-based data structures (Map, Set, Object) for O(1) average-case lookups, insertions, and deletions.
- Essential for: Two Sum pattern, frequency counting, duplicate detection, grouping, and memoization.
- **Map**: Key-value pairs with any data type as keys.
- **Set**: Unique values collection for membership testing.
- [Technique Details](techniques/HASH_LOOKUP.md)

### Sliding Window Technique

- Maintain a window over an array/string while expanding and shrinking based on constraints.
- Used for longest substring problems, frequency constraints, and streaming aggregates.
- [Technique Details](techniques/SLIDING_WINDOW.md)

### Two Pointers Technique

- Use two pointers to traverse data structures efficiently, eliminating nested loops.
- **Opposite Direction**: Pointers start at opposite ends and converge (e.g., Two Sum, palindrome checking).
- **Same Direction**: Pointers move in parallel at different speeds (e.g., remove duplicates, fast/slow cycle detection).
- [Technique Details](techniques/TWO_POINTERS.md)

## Quality Tools

### Automated Quality Checks

```bash
# Quick quality check
npm run quality:check

# Fix common issues
npm run quality:fix

# Comprehensive analysis
npm run quality:full

# Algorithm complexity
npm run complexity:leetcode
```

### Testing

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

See [Testing Guide](./TESTING.md) and [Code Quality Guide](./CODE_QUALITY.md) for details.

## Learning Resources

### For Problem Solving

1. Start with [Pólya-Inspired Quickstart](./CODING_QUICKSTART.md)
2. Review relevant [technique guides](./techniques/)
3. Study similar problems in [analysis/](./analysis/)
4. Practice with [Interview Workflow](./interviews/INTERVIEW_WORKFLOW.md)

### For Deep Learning

- [LLM Learning System](./llm-learning-system.md): Research-driven active recall
- [Quick Start Guide](./QUICKSTART-LLM-LEARNING.md): Getting started with LLM learning
- Daily learning issues: Automated learning prompts

## Contributing

When adding new content:

1. Follow naming conventions (see [AGENTS.md](../AGENTS.md))
2. Use proper markdown formatting with code blocks
3. Include complexity analysis for algorithms
4. Link to related problems and techniques
5. Run quality checks before committing
6. Add tests for complex implementations

## Agent Guidelines

For AI agents working on this repository, see:

- [AGENTS.md](../AGENTS.md): Comprehensive agent guidelines
- [CLAUDE.md](../CLAUDE.md): Code review focus areas
- [.github/copilot-instructions.md](../.github/copilot-instructions.md): GitHub Copilot instructions
- [.github/agents/](../.github/agents/): Individual agent configurations
