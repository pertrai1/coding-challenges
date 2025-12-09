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
  - Given 2 integer arrays, return the max length of the subarray that can be found in both arrays.
- Identify unknowns, givens, and constraints.
  - Seeing that the constraint is the length will be less than or equal to 1,000, I would say that the algorithm can run in O(2^n) time ~1M operations.
- Determine input sizes and value ranges.
- Examine edge cases (empty input, minimal/maximal inputs, duplicates, special patterns.
- Visualize the structure (arrays, pointers, trees, graphs, intervals).

Template:

```plaintext
Restatement: Given 2 integer arrays, return the max length of the subarray that can be found in both arrays.
Inputs: 2 integer arrays
Constraints: nums1.length is greater or equal to 1 and nums2.length is less than or equal to 1,000
Edge Cases: empty arrays, single element, all the values are the same, there are no matches, there is complete overlap
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
Recognized Pattern: 2D dynamic programming
Simplified Version Strategy:
- nums1=[1, 2], nums2=[2,1,2]
- dp[0][x] = 0, dp[x][0] = 0 (base)
- nums1[0] = 1, nums2[1] = 1 -> dp[1][2] = 1, max = 1
- nums1[1] = 2, nums2[0] = 2 -> dp[2][1] = 1, max = 1
- nums1[1] = 2, nums2[0] = 2 -> dp[2][3] = 1, max = 1
Chosen Technique: 2D DP table
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
- Function signature findLength(nums1: number[], nums2: number[]) => number
- Base cases is there are no items in either array or no items are not the same, which gives a max length of 0
- Data structures are 2 arrays
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
