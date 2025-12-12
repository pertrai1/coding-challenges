# Pólya-Inspired Coding Problem Quickstart

A structured approach to solving coding problems inspired by George Pólya's problem-solving techniques.
This quickstart guide breaks down the problem-solving process into four key phases: Understand, Plan, Execute, and Reflect. Each phase includes specific goals, strategies, and templates to help you systematically tackle coding challenges.

## Table of Contents

- [Understand](#understand)
- [Plan](#plan)
- [Execute](#execute)
- [Reflect](#reflect)

## Understand

> Goal: Grasp the structure, constraints, and hidden patterns before touching the keyboard.

- Restate the problem in your own words.
- Identify unknowns, givens, and constraints.
- Determine input sizes and value ranges.
- Examine edge cases (empty input, minimal/maximal inputs, duplicates, special patterns.
- Visualize the structure (arrays, pointers, trees, graphs, intervals).

Template:

```plaintext
Restatement:
Inputs:
Constraints:
Edge Cases:
Visualization Notes:
```

## Plan

> Goal: Form a strategy using pattern recognition, simplification, and invariants.

- Recognize patterns similar to known problem types.
- Solve a simpler or smaller version first.
- Choose a primary technique (two pointers, sliding window, hashing, DP, BFS/DFS, recursion, sorting, binary search, greedy, stack/heap, prefix/suffix arrays).
- Work backward from the desired output.
- Identify invariants that must remain true during processing.

Template:

```plaintext
Recognized Pattern:
Simplified Version Strategy:
Chosen Technique:
Invariant(s):
```

## Execute

> Goal: Write intentional, structured TypeScript code guided by your plan.

- Start with a code skeleton (signature, base cases, loops, data structures).
- Implement methodically according to the plan.
- Track the meaning of each variable, pointer, or state.
- Maintain invariants with each step.

Template:

```plaintext
Skeleton Outline:
- Function signature
- Base cases
- Data structures
- Main loop / recursion plan
Notes While Coding:
```

## Reflect

> Goal: Confirm correctness, optimize clarity, and convert the learning into future intuition.

- Test against edge cases and tricky patterns.
- Validate time and space complexity.
- Simplify logic where possible.
- Generalize the insight into a reusable pattern for future problems.

Template:

```plaintext
Edge Case Results:
Time Complexity:
Space Complexity:
Possible Simplifications:
Generalized Insight:
```
