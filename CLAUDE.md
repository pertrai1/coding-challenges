# CLAUDE.md - Code Review Guidelines

> **For comprehensive agent guidelines and repository maintenance, see [AGENTS.md](./AGENTS.md)**  
> **For GitHub Copilot instructions, see [.github/copilot-instructions.md](./.github/copilot-instructions.md)**

This file focuses on code review standards and educational feedback for algorithmic solutions.

## Repository Purpose

This repository contains coding challenge solutions from multiple platforms for learning and practicing:

- **LeetCode**: Data structures and algorithms (167 problems)
- **GreatFrontEnd**: Frontend engineering and JavaScript fundamentals (9 problems)
- **System Design**: Architecture patterns and scalable system design
- **Interviews**: Mock interview sessions and practice scenarios

Solutions are primarily written in JavaScript/TypeScript with comprehensive testing using Vitest.

## Code Review Focus

### 1. Algorithm Correctness

- Verify the solution correctly solves the problem for all test cases
- Check for edge cases: empty arrays, single elements, negative numbers, null values
- Confirm the solution handles constraints mentioned in the problem

### 2. Time & Space Complexity

- Verify time and space complexity (Big O notation)
- Complexity analysis is typically documented in `docs/analysis/` or code comments
- Suggest optimizations if a more efficient approach exists
- Compare to optimal solutions when applicable

### 3. Code Quality

- Use clear, descriptive variable names (not just `i`, `j`, `k` unless in simple loops)
- Add comments for non-obvious logic or algorithm steps
- Keep functions focused and single-purpose
- Prefer readability over cleverness

### 4. JavaScript/TypeScript Best Practices

- Use `const` by default, `let` only when reassignment needed
- Avoid `var` (except for LeetCode solution function definitions)
- Use modern ES6+ syntax (arrow functions, destructuring, spread operators) where appropriate
- Prefer built-in methods (`.map()`, `.filter()`, `.reduce()`) when appropriate
- Use strict equality (`===`) over loose equality (`==`)

### 5. Problem-Specific Patterns

When reviewing graph problems:

- Verify proper graph representation (adjacency list/matrix)
- Check for visited tracking to avoid cycles
- Confirm DFS/BFS implementation follows standard patterns
- Look for Union-Find correctness if applicable

When reviewing array/string problems:

- Check for two-pointer technique correctness
- Verify sliding window boundaries
- Confirm hash map usage is optimal

### 6. README Requirements

Each problem directory should include a `README.md` containing:

- Problem title and difficulty badge
- Link to the problem on the respective platform (LeetCode, GreatFrontEnd, etc.)
- Problem description
- Examples and constraints

## Platform-Specific Guidelines

### LeetCode Solutions

LeetCode solutions focus on algorithmic problem-solving and data structures. Follow the DSA Learning Focus guidelines below.

### GreatFrontEnd Solutions

When reviewing GreatFrontEnd solutions, focus on frontend-specific considerations:

#### Browser & JavaScript APIs

- Verify correct usage of browser APIs (DOM, Fetch, Storage, etc.)
- Check for browser compatibility considerations
- Validate event handling patterns (delegation, cleanup)
- Ensure proper async/await and Promise usage

#### Frontend Performance

- Check for unnecessary re-renders or DOM manipulations
- Verify efficient data structure usage for UI updates
- Look for debouncing/throttling where appropriate
- Consider memory leaks (event listeners, timers, closures)

#### API Design

- Evaluate the public API for clarity and usability
- Check for consistent naming conventions
- Verify parameter validation and error handling
- Consider edge cases specific to browser environments

#### Code Organization

- Prefer functional patterns where appropriate
- Keep functions small and focused
- Use modern ES6+ features (optional chaining, nullish coalescing, etc.)
- Consider separation of concerns (logic vs. presentation)

#### Testing Considerations

- Solutions should handle edge cases (empty inputs, invalid types, etc.)
- Consider async operation handling
- Verify cleanup logic (removing event listeners, clearing timeouts)

## DSA Learning Focus

When reviewing algorithmic solutions, provide educational feedback that helps with pattern recognition and interview preparation:

### Pattern Identification

- Clearly state which algorithmic pattern(s) the solution uses
- Patterns include: Two Pointers, Sliding Window, Binary Search, BFS/DFS, Dynamic Programming, Backtracking, Union-Find, Topological Sort, Greedy, Divide and Conquer, etc.
- Explain WHY this pattern is suitable for this specific problem type

### Key Insight Explanation

- Every problem has a "key insight" that makes the optimal solution possible
- Explain what that insight is and why it works
- Example: "The key insight for 'Subarrays with K Distinct' is that exactlyK = atMostK - atMostK(k-1)"
- Example: "The key insight for 'Two Sum' is using a hash map to achieve O(1) complement lookup"

### Related Problems

- Suggest 2-3 similar problems (from any platform) that use the same pattern
- This helps build pattern recognition skills
- Group problems by pattern family (e.g., "variable sliding window" problems)
- When applicable, mention if the same problem exists on different platforms

### Complexity Deep-Dive

- Don't just state complexity - explain WHY
- Example: "O(n) because each element is visited at most twice - once when right pointer includes it, once when left pointer excludes it"
- For amortized analysis, explain the reasoning clearly

### Common Mistakes

- Point out common mistakes people make with this pattern
- Example: "A common mistake with sliding window is forgetting to clean up the frequency map when elements leave the window"
- Example: "A common mistake with two pointers is not handling duplicates correctly"

## Quality Automation

The repository uses automated quality checks (ESLint, Prettier, Vitest, Complexity Analyzer).

### Quick Commands

```bash
npm run quality:check      # Quick check
npm run quality:fix        # Auto-fix issues
npm test                   # Run tests
npm run complexity:leetcode # Analyze complexity
```

**For detailed quality automation, see [docs/CODE_QUALITY.md](./docs/CODE_QUALITY.md)**

## Testing

Use Vitest for complex solutions, data structures, and GreatFrontEnd implementations. Not all LeetCode solutions require tests (validated on platform).

**For comprehensive testing guide, see [docs/TESTING.md](./docs/TESTING.md)**

## Agent Collaboration

Multiple specialized agents work on this repository (DSA Code Reviewer, Test Case Generator, Algorithmic Pattern Spotter).

**For detailed agent guidelines and coordination, see [AGENTS.md](./AGENTS.md)**

## Documentation Standards

Each problem directory should include:

- README.md with problem description and constraints
- Well-commented solution file with complexity analysis
- Test file (when applicable)
- Analysis file in `docs/analysis/` with patterns, insights, and trade-offs

**For comprehensive documentation standards, see [AGENTS.md](./AGENTS.md#documentation-maintenance-standards)**

## What NOT to Flag

- Multiple solution approaches (exploratory learning is encouraged)
- Console.log statements (used for debugging/learning)
- Less optimal solutions if clearly marked as alternative approaches
- Missing tests for simple LeetCode solutions (validated on platform)
- ESLint warnings (allowed for educational complexity)

## Tone

Keep feedback constructive and educational. This is a learning repository, so explain _why_ something could be improved, not just _what_ to change.
