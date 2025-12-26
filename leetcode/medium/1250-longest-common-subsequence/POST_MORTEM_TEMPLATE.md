# Post-Mortem Log

## Problem

Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.

- **Problem Name:** Longest Common Subsequence
- **Problem Link (if applicable):** [https://leetcode.com/problems/longest-common-subsequence/](https://leetcode.com/problems/longest-common-subsequence/)
- **Date:** 12/26/2025

---

## Time Tracking

- **Time to design the algorithm:** 30 minutes
- **Time to code:** 30 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- I first attempted using a greedy 2 pointer approach, but the solution was not going to work because it would miss subsequences.
- Missed seeing the dynamic programming approach using a nested loop to build the 2D table that would return the last cell as the answer.

### Was my final solution optimal?

- Yes, the dynamic programming solution is optimal for this problem with a time complexity of O(m*n) and space complexity of O(m*n) where m and n are the lengths of the two strings.

### What triggers or patterns did I find or miss?

- Missed the pattern of building a 2D DP table to store intermediate results for subsequences.

## Mistakes & Bugs

### Mistakes I keep making

- Not considering dynamic programming for subsequence problems.

### Bugs to add to the Bug List

- Not using dynamic programming for problems involving subsequences.

## Retrospective

### What could I have done differently?

- I could have thought about dynamic programming earlier instead of trying a greedy approach first.

### Takeaways

- Dynamic programming is a powerful technique for solving subsequence problems.

### Anything to add to my cheat sheet?

- Remember to consider dynamic programming for subsequence problems.

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3      |       |
| **Coding**          | 3      |       |
| **Verification**    | 2      |       |
| **Communication**   | 3      |       |

---
