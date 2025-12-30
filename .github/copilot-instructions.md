# GitHub Copilot Instructions for Coding Challenges Repository

> **For comprehensive agent guidelines, see [AGENTS.md](../AGENTS.md)**
> **For code review focus, see [CLAUDE.md](../CLAUDE.md)**

This file contains GitHub Copilot-specific instructions for inline suggestions and chat interactions.

## Repository Overview

This repository contains coding challenge solutions from multiple platforms for learning and practicing:

- **LeetCode**: Data structures and algorithms (167 problems: 80 easy, 73 medium, 14 hard)
- **GreatFrontEnd**: Frontend engineering and JavaScript fundamentals (9 problems)
- **System Design**: Architecture patterns and scalable system design
- **Interviews**: Mock interview sessions and practice scenarios

Solutions are primarily written in JavaScript/TypeScript with comprehensive testing using Vitest.

## Repository Structure

- **leetcode/**: LeetCode problems organized by difficulty (easy/medium/hard)
  - Problem directories: `[number]-[problem-name]` (e.g., `0001-two-sum`)
  - Each contains: `README.md`, solution file(s), test file(s)
- **greatfrontend/**: GreatFrontEnd problems (gfe-75, blind-75)
- **system-design/**: System design problems, solutions, and templates
- **docs/**: Comprehensive documentation
  - `analysis/`: Detailed problem breakdowns and pattern analysis
  - `techniques/`: Algorithmic technique guides (Hash Lookup, Two Pointers, etc.)
  - `topics/`: Topic-specific guides (AI/LLM, Math, Graphs, etc.)
  - `interviews/`: Interview workflow and rubrics
  - `platforms/`: Platform-specific guides (LeetCode, GreatFrontEnd)
- **scripts/**: Quality automation scripts (complexity analyzer, LLM review, etc.)
- **AGENTS.md**: Comprehensive AI agent guidelines
- **CLAUDE.md**: Code review guidelines

## Code Style and Conventions

### JavaScript Solutions

- Use JSDoc comments for function signatures
- Use `var` keyword for function expressions or `function` declarations (LeetCode convention)
- Use ES6+ features: `const`, `let`, arrow functions, Map, Set
- Keep solutions concise and focused on the algorithm
- Example:

  ```javascript
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  var twoSum = function (nums, target) {
    // Implementation
  };
  ```

### TypeScript Solutions

- Use explicit type annotations for function parameters and return types
- Follow strict TypeScript configuration (defined in `tsconfig.json`)
- Target ES2020 with CommonJS modules
- Example:

  ```typescript
  function createCounter(n: number): () => number {
    return function () {
      return n++;
    };
  }
  ```

## Coding Guidelines

1. **Clarity over Cleverness**: Write clear, readable code that explains the algorithmic approach
2. **Efficiency Matters**: Optimize for time and space complexity where appropriate
3. **Standard Patterns**: Use common algorithmic patterns (two pointers, sliding window, hash maps, etc.)
4. **Data Structures**: Leverage appropriate data structures (Map, Set, arrays, etc.)
5. **Edge Cases**: Consider and handle edge cases (empty inputs, nulls, boundary conditions)

## Problem-Solving Approach

When creating new solutions:

1. **Understand the Problem**: Read and comprehend the problem requirements
2. **Identify Patterns**: Recognize algorithmic patterns (DFS, BFS, DP, etc.)
3. **Choose Data Structures**: Select appropriate data structures for the solution
4. **Write Clean Code**: Implement the solution with clear variable names and logic
5. **Document Complexity**: Consider time and space complexity of the solution

## Documentation Standards

- Problem READMEs should include:
  - Problem title with difficulty badge
  - Problem description (from LeetCode)
  - Examples with inputs and outputs
  - Constraints
- Use the `SOLUTION_TEMPLATE.md` as a guide for detailed solution documentation when needed

## Testing

This repository uses [Vitest](https://vitest.dev/) for testing:

- **Test Files**: Use `*.test.ts` or `*.test.js` naming convention
- **When to Test**:
  - Complex algorithms with helper functions
  - Data structure implementations (linked lists, trees, graphs)
  - Solutions with multiple edge cases
  - GreatFrontEnd API implementations
  - Reusable utility functions
- **Note**: Not all LeetCode solutions require tests (validated on platform)

### Test Commands

```bash
npm test              # Run tests in watch mode
npm run test:run      # Run tests once (CI mode)
npm run test:ui       # Run tests with interactive UI
npm run test:coverage # Generate coverage report
```

See [docs/TESTING.md](../docs/TESTING.md) for detailed instructions.

## Quality Automation

### Quick Commands

```bash
npm run quality:check      # Quick quality check
npm run quality:fix        # Fix common issues
npm test                   # Run tests in watch mode
npm run test:ui            # Interactive test UI
npm run complexity:leetcode # Analyze complexity
```

**For comprehensive quality guidelines, see [docs/CODE_QUALITY.md](../docs/CODE_QUALITY.md)**

## AI Agent Collaboration

Multiple specialized agents work on this repository. When collaborating:

- Reference files using markdown links: `[file.ts](file.ts#L10)`
- Use consistent terminology from documentation
- Coordinate to avoid duplication in `docs/analysis/`

**Available agents:**

- DSA Code Reviewer: Algorithm solutions and complexity analysis
- Test Case Generator: Comprehensive test cases
- Algorithmic Pattern Spotter: Pattern identification

**For detailed agent guidelines, see [AGENTS.md](../AGENTS.md)**

## Documentation Standard

Each problem directory should include:

- `README.md`: Problem description, examples, constraints, platform link
- Solution file: Well-commented code with complexity analysis
- Test file (when applicable): Using Vitest
- Analysis file (in `docs/analysis/`): Detailed breakdown with patterns and insights

**For detailed documentation standards, see [AGENTS.md](../AGENTS.md#documentation-maintenance-standards)**

## Language-Specific Notes

### JavaScript

- Compatible with LeetCode JavaScript environment
- Use modern ES6+ syntax where supported
- Common patterns: hash maps (Map), sets (Set), array methods

### TypeScript

- Strict mode enabled
- ES2020 target
- CommonJS modules
- Full type safety required

## Common Problem Categories

### LeetCode (DSA Focus)

- **Arrays & Strings**: Two pointers, sliding window, hash maps
- **Trees**: DFS, BFS, recursion
- **Graphs**: Adjacency lists, union-find, topological sort
- **Dynamic Programming**: Memoization, tabulation
- **Math & Bit Manipulation**: Number theory, bitwise operations
- **Hash Tables**: Frequency counting, lookups

### GreatFrontEnd (Frontend Focus)

- **Browser APIs**: DOM manipulation, Fetch, Storage, Events
- **JavaScript Fundamentals**: Closures, async/await, Promises
- **Frontend Performance**: Debouncing, throttling, efficient rendering
- **API Design**: Public APIs, error handling, parameter validation
- **Code Organization**: Functional patterns, separation of concerns

## System Design

The `system-design/` directory contains:

- **problems/**: System design problem descriptions
- **solutions/**: Detailed architecture solutions
- **templates/**: Reusable design templates and patterns
- **practice-log/**: Practice session logs and reviews

System design solutions should include:

- Architecture diagrams
- Component descriptions
- Trade-off analysis
- Scalability considerations
- Technology choices and justifications

## General Preferences

- **Naming**: Use descriptive variable names (single letters like `i`, `j`, `k` are acceptable for loop iterators and standard mathematical contexts)
- **Comments**: Add comments for complex logic, but prefer self-documenting code
- **Formatting**: Consistent indentation (2 or 4 spaces)
- **Imports**: Minimal external dependencies (solutions should be self-contained)
- **File Naming**: Follow kebab-case for file names matching problem names

## PR Review Guidance

When reviewing PRs in this repository, remember this is a LEARNING repository.
Provide educational feedback that helps understand:

1. **Pattern Recognition**: What pattern does this solution demonstrate? (Sliding Window, Two Pointers, DP, BFS/DFS, etc.)
2. **Key Insight**: What is the "aha!" moment or key insight that makes this solution work?
3. **Trade-offs**: What are the time/space trade-offs of different approaches?
4. **Related Problems**: What similar problems use the same pattern?
5. **Interview Context**: How would you explain this solution in an interview?
6. **Common Mistakes**: What are typical mistakes people make with this pattern?

## Learning Resources

Key documentation:

- [Pólya-Inspired Quickstart](../docs/CODING_QUICKSTART.md): Problem-solving framework
- [Testing Guide](../docs/TESTING.md): Vitest testing
- [Code Quality Guide](../docs/CODE_QUALITY.md): Quality automation
- [Interview Workflow](../docs/interviews/INTERVIEW_WORKFLOW.md): AI-assisted interviews

**For comprehensive learning resources, see [AGENTS.md](../AGENTS.md#learning-resources)**

## What NOT to Do

- Don't add unnecessary dependencies or imports
- Don't over-engineer simple solutions
- Don't ignore time/space complexity considerations
- Don't use deprecated JavaScript features
- Don't deviate from LeetCode's expected function signatures
- Don't flag console.log statements (used for learning/debugging)
- Don't require tests for all LeetCode solutions (validated on platform)
- Don't block code for having ESLint warnings (allowed for learning)
- Don't suggest changes without explaining WHY
