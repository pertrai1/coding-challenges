# Post-Mortem Log

## Problem

A YouTuber wants to analyze their channel's performance to see if viewer engagement varies during certain times of the year. We are given:

- An array, `views`, of length `n > 0`, where `views[i]` represents the number of views on day `i`.
- An array, `periods`, of length `p > 0`, where each element is a pair `[l, r]` with `0 ≤ l ≤ r < n`. Each pair represents a time period from day `l` to day `r` _inclusive_.

Return an array, `results`, of integers with length `p`, where `result[i]` is the number of views during period `i`.

- **Problem Name:** YouTube Channel View Analysis
- **Problem Link (if applicable):** None
- **Date:** 11/29/2025

---

## Time Tracking

- **Time to design the algorithm:** 20 minutes
- **Time to code:** 35 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

The first attempt was going to end up being O(n \* p) because I was going to sum up each range for each period. I realized that would be too slow for the input limits.

Then I considered using a prefix sum array to preprocess the views array. This would allow me to compute the sum for any range in constant time after an O(n) preprocessing step

### Analysis

_Explain why certain approaches worked or didn’t._

- The brute-force approach of summing each range for each period would have been too slow, especially with the maximum constraints of n and p being 10^5. This would lead to a time complexity of O(n \* p), which is not feasible.
- The prefix sum approach works well because it allows for O(1) time complexity for each range query after an initial O(n) preprocessing step. This makes the overall time complexity O(n + p), which is efficient enough for the given constraints.

-

### Was my final solution optimal?

- Yes, the final solution using prefix sums is optimal for this problem. It efficiently handles the range sum queries in constant time after a linear preprocessing step, making it suitable for large input sizes.

-

### What triggers or patterns did I find or miss?

- The key pattern is recognizing that range sum queries can be optimized using prefix sums. This is a common technique in algorithm design for problems involving cumulative sums or ranges.

---

## Mistakes & Bugs

### Mistakes I keep making

Not being methodical in tracing the logic when adding the prefix sums.

-

### Bugs to add to the Bug List

---

## Retrospective

### What could I have done differently?

- I could have stepped through a small example manually to understand what values look like.
- I could have taken time to understand the prefix sum calculation better.

### Takeaways

-

### Anything to add to my cheat sheet?

---

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 4      |       |
| **Coding**          | 3      |       |
| **Verification**    | 4      |       |
| **Communication**   | 3.5    |       |

---
