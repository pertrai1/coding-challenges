# Post-Mortem Log

## Problem

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

- **Problem Name:** Linked List Cycle II
- **Problem Link (if applicable):** [https://leetcode.com/problems/linked-list-cycle-ii](https://leetcode.com/problems/linked-list-cycle-ii)
- **Date:** 01/01/2026

---

## Time Tracking

- **Time to design the algorithm:** 10 minutes
- **Time to code:** 30 minutes
- **Time debugging/fixing:** 20 minutes

---

## Solution Exploration

### What approaches did I consider?

_List all approaches you considered, including brute force and optimized solutions._

- The Floyd's Tortoise and Hare to detect the cycle.

### Final Solution Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Is it optimal?** (Yes/No, and why) Yes because the solution is using constant space and linear time, which can be expected for a linked list.

### Why this approach worked (or didn't)

_Explain the trade-offs and why certain approaches were better than others._

- This approach worked because it efficiently detects the cycle and finds the starting node without using extra space.

## Pattern Recognition

### What algorithmic pattern does this problem use?

_e.g., Two Pointers, Sliding Window, DFS/BFS, Dynamic Programming, Backtracking, Binary Search, etc._

- Floyd's Tortoise and Hare (Two Pointers)

### Key Insight

_What's the "aha moment" or core concept that makes this solution work?_

- When the slow and fast pointers meet, resetting one pointer to the head and moving both at the same pace will lead them to meet at the cycle's starting node. (I missed the second part of this when I did not originally reset the slow pointer to head)

### Related Problems

_List 2-3 similar problems that use the same pattern._

- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)
- [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number)

## Edge Cases & Verification

### What clarifying questions did I ask?

- Is the linked list guaranteed to have at least one node?
- Can the linked list be empty?
- What should be returned if there is no cycle?
- Should I modify the linked list?

### Edge cases handled

- Empty linked list
- Single node with no cycle
- Single node with a cycle to itself

### Edge cases missed

-

## Mistakes & Bugs

### Mistakes I keep making

- Not resetting the slow pointer to head after detecting the cycle.

### Bugs to add to the Bug List

-

## Retrospective

### Key Takeaways & Lessons Learned

_What did I learn? What would I do differently next time?_

- Remember to reset pointers as needed in cycle detection problems.

### Add to Cheat Sheet

_Templates, formulas, or patterns to remember._

- Floyd's Tortoise and Hare algorithm for cycle detection and finding the start of the cycle.

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3      |       |
| **Coding**          | 3      |       |
| **Verification**    | 3      |       |
| **Communication**   | 3      |       |

---
