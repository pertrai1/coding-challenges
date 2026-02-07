# Coding Challenges

A personal learning repository for mastering data structures, algorithms, frontend engineering, and system design through hands-on problem solving.

## Table of Contents

- [About](#about)
- [Quick Stats](#quick-stats)
- [Repository Structure](#repository-structure)
- [Browse Solutions](#browse-solutions)
- [Learning Resources](#learning-resources)
- [Getting Started](#getting-started)
- [Tools & Quality](#tools--quality)
- [Contributing](#contributing)
- [License](#license)

## About

Each solution includes complexity analysis, pattern identification, and multiple approaches where applicable. The repository features:

- **LeetCode problems** across easy, medium, and hard difficulty
- **GreatFrontEnd challenges** covering frontend engineering and JS fundamentals
- **System design problems** with full and rapid drill solutions
- **AI-powered code review** via specialized agents ([details](./AGENTS.md))
- **Spaced repetition system** with automated review scheduling
- **Automated quality tooling** with ESLint, Prettier, and complexity analysis
- **Detailed analysis docs** with pattern breakdowns and key insights

## Quick Stats

| Platform                                        | Focus Area                   | Browse                                  |
| ----------------------------------------------- | ---------------------------- | --------------------------------------- |
| [LeetCode](https://leetcode.com/u/warlhord/)    | Data Structures & Algorithms | [Solutions](./leetcode/)                |
| [GreatFrontEnd](https://www.greatfrontend.com/) | Frontend Engineering         | [Solutions](./greatfrontend/)           |
| [System Design](./system-design/)               | Architecture & Scalability   | [Solutions](./system-design/solutions/) |

**Other profiles**: [FrontendMasters](https://frontendmasters.com/u/pertrai1/) | [Frontend Mentor](https://www.frontendmentor.io/profile/pertrai1) | [Exercism](https://exercism.org/profiles/pertrai1)

## Repository Structure

```text
coding-challenges/
├── leetcode/              # LeetCode solutions by difficulty
│   ├── easy/
│   ├── medium/
│   └── hard/
├── greatfrontend/         # GreatFrontEnd solutions
│   ├── gfe-75/            #   GFE 75 curated list
│   └── blind-75/          #   Blind 75 curated list
├── system-design/         # System design practice
│   ├── problems/          #   Problem prompts
│   ├── solutions/         #   Full & rapid drill solutions
│   └── templates/         #   Reusable design templates
├── docs/                  # Documentation & guides
│   ├── analysis/          #   Problem breakdowns
│   ├── techniques/        #   Algorithm pattern guides
│   ├── topics/            #   Topic-specific guides
│   ├── platforms/         #   Platform-specific guides
│   └── interviews/        #   Interview workflow & rubrics
├── interviews/            # Mock interview sessions
└── scripts/               # Quality automation scripts
```

Each problem directory contains a `README.md` with the problem description, solution file(s), and test files where applicable.

## Browse Solutions

**By difficulty**: [Full Problem Index](./docs/PROBLEMS.md) — all LeetCode problems organized by difficulty and topic.

**By platform**:

- [LeetCode Solutions](./leetcode/) — [Platform Guide](./docs/platforms/leetcode.md)
- [GreatFrontEnd Solutions](./greatfrontend/) — [Platform Guide](./docs/platforms/greatfrontend.md)
- [System Design Solutions](./system-design/) — full and rapid drill formats

**By pattern**: [Two Pointers](./docs/techniques/TWO_POINTERS.md) | [Sliding Window](./docs/techniques/SLIDING_WINDOW.md) | [Hash Lookup](./docs/techniques/HASH_LOOKUP.md) | [All Patterns](./docs/PROBLEMS.md#problems-by-pattern)

## Learning Resources

### Algorithmic Techniques

- [Hash Lookup](./docs/techniques/HASH_LOOKUP.md) — O(1) lookups with hash tables
- [Two Pointers](./docs/techniques/TWO_POINTERS.md) — Efficient array traversal
- [Sliding Window](./docs/techniques/SLIDING_WINDOW.md) — Subarray/substring problems
- [Gradient Descent](./docs/techniques/ai-ml/GRADIENT_DESCENT.md) — ML optimization technique

### Topic Guides

- [AI/LLM-Oriented Problems](./docs/topics/ai-llm.md) — Algorithms that map to generative AI fundamentals
- [Math Problems](./docs/topics/math.md) — Number theory and mathematical algorithms

### Interview Preparation

- [Interview Workflow](./docs/interviews/INTERVIEW_WORKFLOW.md) — AI-assisted technical interviews
- [System Design Templates](./system-design/templates/) — Full, rapid, and cheat-sheet templates
- [Problem-Solving Framework](./docs/CODING_QUICKSTART.md) — Polya-inspired quickstart guide

### Detailed Analysis

Problem breakdowns in [docs/analysis/](./docs/analysis/) covering pattern identification, complexity analysis, key insights, and alternative approaches.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pertrai1/coding-challenges.git
cd coding-challenges

# Install dependencies
npm install

# Run tests
npm test

# Run a specific solution
node leetcode/easy/0001-two-sum/two-sum.js
```

## Tools & Quality

| Tool                          | Purpose        | Command                       |
| ----------------------------- | -------------- | ----------------------------- |
| [Vitest](https://vitest.dev/) | Test runner    | `npm test`                    |
| ESLint                        | Code quality   | `npm run lint`                |
| Prettier                      | Formatting     | `npm run format`              |
| Complexity Analyzer           | Big O analysis | `npm run complexity:leetcode` |

```bash
# Quick quality check
npm run quality:check

# Fix all issues
npm run quality:fix

# Comprehensive analysis
npm run quality:full
```

See [Testing Guide](./docs/TESTING.md) and [Code Quality Guide](./docs/CODE_QUALITY.md) for details.

### Spaced Repetition

Reviews are automatically scheduled at 1, 3, 7, 14, and 30 days after solving a problem. GitHub issues are created as review reminders. See [Interview Workflow](./docs/interviews/INTERVIEW_WORKFLOW.md) for details.

### AI Agents

Specialized AI agents assist with code review, test generation, and pattern identification. See [AGENTS.md](./AGENTS.md) for details.

## Contributing

This is a personal learning repository, but suggestions and improvements are welcome. See [CLAUDE.md](./CLAUDE.md) for code review guidelines and quality standards.

## License

ISC
