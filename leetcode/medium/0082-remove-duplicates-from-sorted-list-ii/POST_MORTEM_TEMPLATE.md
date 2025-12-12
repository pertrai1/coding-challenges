# Post-Mortem Log

## Problem

_Describe the problem in your own words._

- **Problem Name:** Remove Duplicates from Sorted List II
- **Problem Link (if applicable):** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)
- **Date:** 12/11/2025

---

## Time Tracking

- **Time to design the algorithm:** 25 minutes
- **Time to code:** 40 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- My first thought was to have a current and previous pointer, but did not consider that I would need to also have a dummy node to keep track of the head of the linked list in case head gets lost.

### Analysis

_Explain why certain approaches worked or didn’t._

- My original approach was to traverse the list but my logic inside of the traversal did not properly handle finding and removing duplicates.

### Was my final solution optimal?

- For this problem I believe it is because the list needs to be traversed in order to find all of the nodes that could be duplicates and removed. That means that the time would on average be O(n). The space would be O(1) for the pointers used.

### What triggers or patterns did I find or miss?

- I saw the two pointer pattern but my initial implementation was not accurate and full of logic issues.

## Mistakes & Bugs

### Mistakes I keep making

- Not tracing a small problem set to see if the logic holds up to solving the problem.

### Bugs to add to the Bug List

- Not using a dummy node to hold a reference to the head of the list.

## Retrospective

### What could I have done differently?

- Commented the logic quicker before going straight to the code
- Traced a small list to see if logic is correct

### Takeaways

- Linked lists are hard to try to solve by storing all the steps in my head and not on paper

### Anything to add to my cheat sheet?

- Dummy node

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3      |       |
| **Coding**          | 3.5    |       |
| **Verification**    | 4      |       |
| **Communication**   | 4      |       |

---
