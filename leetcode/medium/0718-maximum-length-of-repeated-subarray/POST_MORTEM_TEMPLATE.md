# Post-Mortem Log

## Problem

Given 2 numeric arrays, return the max length of the longest subarray that is the same between the two arrays.

- **Problem Name:** Maximum Length of Repeated Subarray
- **Problem Link (if applicable):** [https://leetcode.com/problems/maximum-length-of-repeated-subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray)
- **Date:** 12/9/2025

---

## Time Tracking

- **Time to design the algorithm:** 30 minutes
- **Time to code:** 45 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- The first solution I thought of was a sliding window approach, but this would be best for use with a single array.
- I did not see that this was a prime problem for dynamic programming using a 2D table. I found out also that a single array could be used to save on space.

### Analysis

- The sliding window approach was not going to work because the pattern works best for a single array
- The dynamic programming approach works great when having to deal with multiple arrays where the previous smaller solutions can be remembered to use to solve the current smaller problem.

### Was my final solution optimal?

- Because the dynamic programming allowed for efficient retrieval of previous values
- The 2D array allowed for efficient storage of values

### What triggers or patterns did I find or miss?

- See above with the solution exploration

## Mistakes & Bugs

### Mistakes I keep making

- Not looking for keywords in the description that could lead to seeing what pattern would be best to solve the problem.
- The problem was tagged as a sliding window in Leetcode, but in reality it is a dynamic programming problem.

### Bugs to add to the Bug List

- Trying to use the sliding window pattern on multiple arrays

## Retrospective

### What could I have done differently?

- Pulled out keywords found in the description when I was rewording the problem myself.

### Takeaways

- Sliding window on a single array and DP on multiple arrays

### Anything to add to my cheat sheet?

- See the takeaway above.

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 4      |       |
| **Coding**          | 3.5    |       |
| **Verification**    | 2      |       |
| **Communication**   | 3.5    |       |

---
