# Post-Mortem Log

## Problem

Given a linked list and a value `x`, partition the list so that any nodes less than `x` come before the nodes greater than or equal to `x`. The original relative order of the nodes in should be preserved.

- **Problem Name:** Partition List
- **Problem Link (if applicable):** <https://leetcode.com/problems/partition-list/>
- **Date:** 11-30-2025

---

## Time Tracking

- **Time to design the algorithm:** 25 minutes
- **Time to code:** 30 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- My first thought was to have two pointers that would compare the current node with the partition value `x` and swap the nodes if needed. However, this approach would not preserve the original relative order of the nodes.
- After the traversal of the list, I figured I could connect the two lists.

### Analysis

- The first attempt I had the less than and greater than pointers, but did not have two more pointers to keep track of the heads of the two lists. This caused me to lose the reference to the start of the lists, making it impossible to return the final partitioned list.

### Was my final solution optimal?

- Yes, the final solution runs in O(n) time complexity and O(1) space complexity (not counting the output list), which is optimal for this problem.

### What triggers or patterns did I find or miss?

- I missed the pattern of using dummy head nodes for the two partitions, which simplifies the logic for appending nodes and returning the final list.

## Mistakes & Bugs

### Mistakes I keep making

- I tried to assign the current node to the greater than next which cause it to break the link of the original list.

### Bugs to add to the Bug List

- When partitioning linked lists, always use dummy head nodes to simplify list manipulations and avoid losing references to the start of the lists.

## Retrospective

### What could I have done differently?

- I could have planned more in tracing how the pointers would move and create the two lists that would then be merged together.

### Takeaways

- Put my thoughts and ideas on paper so I don't try to store all of the variables and states in my head.

### Anything to add to my cheat sheet?

- Using dummy nodes is O(1) space because they are only assigned a reference and do not scale with input size.

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3      |       |
| **Coding**          | 2.5    |       |
| **Verification**    | 3      |       |
| **Communication**   | 3.5    |       |

---
