# Post-Mortem Log

## Problem

Given a string that could have brackets - `()`, `[]`, `{}` - make sure that the opening and closing bracket align correctly.

- **Problem Name:** Balanced Brackets
- **Problem Link (if applicable):** [https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets)
- **Date:** 12/3/2025

---

## Time Tracking

- **Time to design the algorithm:** 15 minutes
- **Time to code:** 10 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

- To map the closing bracket with the opening bracket to track that the current character is the expected character.
- To use a stack to pop the current character and check that it is the expected character aligning to the mapping. If not, return false. If not in the mapping, push onto the stack.

### Analysis

_Explain why certain approaches worked or didn’t._

- Having a mapping allows to easily identify if the brackets are the opening and the closing.
- The stack allows to keep track of the characters encountered so far in string.

### Was my final solution optimal?

- Yes it allows for O(n) time and space complexity

### What triggers or patterns did I find or miss?

- None that I can think of. This is a classic problem that is best solved using a map and stack

## Mistakes & Bugs

### Mistakes I keep making

- N/A

### Bugs to add to the Bug List

- N/A

## Retrospective

### What could I have done differently?

- Visualized on paper the stack as I went through each character in the string

### Takeaways

- Be sure to always clarify the requirements of the problem before trying to come up with solutions.
- Look at the constraints to make sure that the data structure is the best for the constraints.

### Anything to add to my cheat sheet?

- N/A

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 3.5    |       |
| **Coding**          | 4      |       |
| **Verification**    | 3      |       |
| **Communication**   | 4      |       |

---
