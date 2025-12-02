# Post-Mortem Log

## Problem

Given the head of a linked list, return the list in ascending order

- **Problem Name:** Sort List
- **Problem Link (if applicable):** <https://leetcode.com/problems/sort-list>
- **Date:** December 2, 2025

---

## Time Tracking

- **Time to design the algorithm:** 15 minutes
- **Time to code:** 30 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- I considered breaking the list into 2 halves and continue to split until each list had 1 node. Then I was going to merge each list back together in the proper order.

### Analysis

- I made a mistake where I was trying to do a combination of merge sort and quicksort. I was splitting the list correctly, but doing it based off of a pivot value that was using a fast/slow pointer approach. The fast/slow pointer approach I took was incorrect because it was movig the pointers based off oa current pointer rather than moving based off its own `next` pointers. This caused the split to be incorrect and ultimately led to an infinite loop when trying to merge the lists back together.

### Was my final solution optimal?

- Yes, the final solution was optimal in space and time complexity. For time, it was O(n log n) because of the merge process that was used. For the space, it was O(log n) because of the recursion stack used during the splitting process. If I had used an iterative approach, I could have gotten the space to be O(1).

### What triggers or patterns did I find or miss?

- The patterns I found were using merge sort for the linked list to get it so it was in ascending order. Using the fast/slow pointer approach allowed me to find the middle of the list to split on and use for the recursion.

## Mistakes & Bugs

### Mistakes I keep making

- Not fully understanding the fast/slow pointer approach for finding the middle of a linked list.
- Mixing sorting algorithms (merge sort and quicksort) when trying to implement the solution.
- Not properly testing edge cases during the coding phase.

### Bugs to add to the Bug List

- Incorrectly implementing the fast/slow pointer approach for finding the middle of a linked list.
- Mixing sorting algorithms leading to incorrect logic and infinite loops.

## Retrospective

### What could I have done differently?

- I could have taken a subset of the problem and solved that first to ensure I was using the correct steps as I traced through the logic.

### Takeaways

- Slow down and be meticulous with tracing through the logic of the algorithm before jumping into coding.

### Anything to add to my cheat sheet?

- Fast/slow pointer approach for finding the middle of a linked list:
  - Initialize two pointers, `slow` and `fast`, both starting at the head of the list.
  - Move `slow` one step at a time (`slow = slow.next`).
  - Move `fast` two steps at a time (`fast = fast.next.next`).
  - When `fast` reaches the end of the list (i.e., `fast` is null or `fast.next` is null), `slow` will be at the middle of the list.

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3      |       |
| **Coding**          | 3      |       |
| **Verification**    | 2      |       |
| **Communication**   | 3      |       |

---
