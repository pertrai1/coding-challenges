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
Restatement: Find the next lexicographical permutation of the input array and return that permutation. If there is no permutation, return the lowest possible order.
Inputs: An array of integers
Constraints: In place modification. The length of the array is between 1 and 100. Each number is between 0 and 100
Edge Cases:
- Empty input: Not applicable as per constraints
- Minimal input: Single element array
- Maximal input: Array of length 100
- Duplicates: Arrays with repeated numbers
Visualization Notes:
- Example: [1,2,3] -> [1,3,2]
- Example: [3,2,1] -> [1,2,3]
- Example: [1,1,5] -> [1,5,1]
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
Recognized Pattern: Similar to generating all permutations except we only need the next one.
Simplified Version Strategy:
1. find the rightmost index `i` where `nums[i] < nums[i + 1]` <-- pivot
2. find the smallest number to the right of `i` that is larger than `nums[i]` and swap.
3. reverse the suffix after `i` to make it the smallest possible.
Chosen Technique: Greedy algorithm with two-pointer technique.
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
- Function signature - nextPermutation(nums: number[]): void
- Base cases - If the array length is less than or equal to 1, return immediately.
- Loops - Loop from the end of the array to find the first decreasing element.
- Data structures - Use the input array itself for in-place modification.
- Main loop / recursion plan:
  1. Find the first decreasing element from the end.
  2. If found, find the element just larger than this element to swap.
  3. Reverse the elements after the swapped position to get the next permutation.
Notes While Coding:
- Keep track of indices carefully to avoid off-by-one errors.
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
Time Complexity: O(n) where n is each element in the array
Space Complexity: O(1) because the array is modified in place.
Possible Simplifications:
Generalized Insight:
```
