# Post-Mortem Log

## Problem

Given a `m x n` board of characters and a list of strings `words`, return all the words that are found on the board. Each word must be constructed from letters in adjacent cells, those that are horizontal or vertical neighbors. The same letter cell may not be used more than once in a word.

- **Problem Name:** Word Search II
- **Problem Link (if applicable):** [https://leetcode.com/problems/word-search-ii](https://leetcode.com/problems/word-search-ii)
- **Date:** 12/17/2025

---

## Time Tracking

- **Time to design the algorithm:** 30 minutes
- **Time to code:** 1 hour 15 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- I figured that this would be a good problem for using a Trie, but did not consider the backtracking using DFS.

### Analysis

_Explain why certain approaches worked or didn’t._

- The Trie structure allowed for efficient prefix checking, which is crucial when searching for multiple words on the board. The backtracking DFS approach enabled exploration of all possible paths on the board while adhering to the constraints of adjacency and non-reuse of cells.

### Was my final solution optimal?

- Yes, the final solution using Trie and backtracking DFS is optimal for this problem, balancing time complexity and space usage effectively.

### What triggers or patterns did I find or miss?

- The pattern of using a Trie for prefix matching was a key insight. I initially missed the importance of backtracking to explore all potential paths on the board.

## Mistakes & Bugs

### Mistakes I keep making

- Not fully considering backtracking techniques in grid-based search problems.

### Bugs to add to the Bug List

- Off-by-one errors when navigating the board.
- Failing to mark cells as visited properly during backtracking.

## Retrospective

### What could I have done differently?

- I could have planned the backtracking approach more thoroughly before coding, ensuring that I accounted for all edge cases and constraints from the start.

### Takeaways

- Using a Trie is highly effective for problems involving multiple word searches with common prefixes.
- Backtracking is a powerful technique for exploring all possible configurations in grid-based problems.

### Anything to add to my cheat sheet?

- Trie structure for prefix matching.
- Backtracking DFS for grid exploration.

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3      |       |
| **Coding**          | 3      |       |
| **Verification**    | 3      |       |
| **Communication**   | 4      |       |

---
