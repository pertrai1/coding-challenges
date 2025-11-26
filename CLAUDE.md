# CLAUDE.md - Code Review Guidelines

## Repository Purpose

This repository contains LeetCode problem solutions for learning and practicing algorithmic problem-solving. Solutions are primarily written in JavaScript/TypeScript.

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
- Link to the LeetCode problem
- Problem description
- Examples and constraints

## DSA Learning Focus

When reviewing LeetCode solutions, provide educational feedback that helps with pattern recognition and interview preparation:

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

- Suggest 2-3 similar LeetCode problems that use the same pattern
- This helps build pattern recognition skills
- Group problems by pattern family (e.g., "variable sliding window" problems)

### Complexity Deep-Dive

- Don't just state complexity - explain WHY
- Example: "O(n) because each element is visited at most twice - once when right pointer includes it, once when left pointer excludes it"
- For amortized analysis, explain the reasoning clearly

### Common Mistakes

- Point out common mistakes people make with this pattern
- Example: "A common mistake with sliding window is forgetting to clean up the frequency map when elements leave the window"
- Example: "A common mistake with two pointers is not handling duplicates correctly"

## What NOT to Flag

- Multiple solution approaches (exploratory learning is encouraged)
- Console.log statements (used for debugging/learning)
- Less optimal solutions if clearly marked as alternative approaches

## Tone

Keep feedback constructive and educational. This is a learning repository, so explain _why_ something could be improved, not just _what_ to change.
