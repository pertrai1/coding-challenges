# GitHub Copilot Instructions for Coding Challenges Repository

## Repository Overview

This repository contains solutions to various LeetCode problems and coding challenges, organized by problem number and topic. Solutions are primarily written in JavaScript and TypeScript.

## Repository Structure

- **Problem Directories**: Named as `[number]-[problem-name]` (e.g., `0001-two-sum`)
  - Each directory contains:
    - `README.md`: Problem description from LeetCode (HTML format)
    - Solution file(s): `[problem-name].js` or `[problem-name].ts`
- **Additional Projects**: Directories like `blog`, `load-balancer`, `netcat`, `notion`
- **SOLUTION_TEMPLATE.md**: Template for documenting solution approaches

## Code Style and Conventions

### JavaScript Solutions

- Use JSDoc comments for function signatures
- Use `var` keyword for function expressions (LeetCode convention)
- Use ES6+ features: `const`, `let`, arrow functions, Map, Set
- Keep solutions concise and focused on the algorithm
- Example:
  ```javascript
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  var twoSum = function(nums, target) {
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
      return function() {
          return n++;
      }
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

- Solutions are primarily designed to be submitted to LeetCode
- Manual testing through LeetCode platform
- No automated testing framework in place (tests are implicit via LeetCode)

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

- **Arrays & Strings**: Two pointers, sliding window, hash maps
- **Trees**: DFS, BFS, recursion
- **Graphs**: Adjacency lists, union-find, topological sort
- **Dynamic Programming**: Memoization, tabulation
- **Math & Bit Manipulation**: Number theory, bitwise operations
- **Hash Tables**: Frequency counting, lookups

## Additional Projects

The repository also contains standalone projects:
- `blog`: Blog application
- `load-balancer`: Load balancing implementation
- `netcat`: Network utility (Node.js)
- `notion`: Notion-related projects

These follow similar code quality standards but may have their own specific patterns and requirements.

## General Preferences

- **Naming**: Use descriptive variable names (avoid single letters except for common iterators)
- **Comments**: Add comments for complex logic, but prefer self-documenting code
- **Formatting**: Consistent indentation (2 or 4 spaces)
- **Imports**: Minimal external dependencies (solutions should be self-contained)
- **File Naming**: Follow kebab-case for file names matching problem names

## What NOT to Do

- Don't add unnecessary dependencies or imports
- Don't over-engineer simple solutions
- Don't ignore time/space complexity considerations
- Don't use deprecated JavaScript features
- Don't deviate from LeetCode's expected function signatures
