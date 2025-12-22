# Post-Mortem Log

## Problem

Given two inputs, `word1: string`, `word2: string`, return the total number of operations needed to have `word1` match `word2`. The operations available are `insert`, `replace`, `delete`.

- **Problem Name:** Edit Distance
- **Problem Link (if applicable):** [https://leetcode.com/problems/edit-distance](https://leetcode.com/problems/edit-distance)
- **Date:** 12/22/2025

---

## Time Tracking

- **Time to design the algorithm:** 25 minutes
- **Time to code:** 30 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- I explored using a greedy algorithm
- Come to find out that Edit Distance is also known as Levenshtein Distance, which is usually solved using dynamic programming

### Analysis

- Using dynamic programming allows for remembering the distances at each of the characters for both words
- Making sure to populate the table initially before iterating over
- Comparing the minimum of the current character in the table with previous characters
- Returning the correct index of the table

### Was my final solution optimal?

- Yes. Making use of the table and dynamic programming allows for making use of previous operations and calculations

### What triggers or patterns did I find or miss?

- I missed dynamic programming being the most efficient way of solving this distance problem

## Mistakes & Bugs

### Mistakes I keep making

- Not tracing through a simple example before starting to code

### Bugs to add to the Bug List

- Off by one iterations that go out of bounds

## Retrospective

### What could I have done differently?

- Setup a trace before going into the coding

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 2      |       |
| **Coding**          | 3      |       |
| **Verification**    | 2      |       |
| **Communication**   | 3      |       |

---
