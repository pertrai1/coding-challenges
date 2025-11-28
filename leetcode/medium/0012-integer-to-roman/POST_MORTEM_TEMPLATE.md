# Post-Mortem Log

## Problem

Given an integer, convert to a roman numeral string.

- **Problem Name:** Integer to Roman
- **Problem Link (if applicable):** https://leetcode.com/problems/integer-to-roman/description/
- **Date:** 11-28-2025

---

## Time Tracking

- **Time to design the algorithm:** 30 minutes
- **Time to code:** 45 minutes

---

## Solution Exploration

### What solutions did I consider or miss?

My first solution was to sotre each roman numeral and its value in as an object inside of an array. Then, as long as the input integer was greater than zero, I would loop through the array and check to see if the integer was greater than the value at the current index. If it was greater, I would continue to the next index. Otherwise, I would push the roman numeral into a result array that I would then join and return. After this I would subtract the value from the integer.

## The feedback from that solution was that the creation of an object in the array has uneccessary overhead. Instead, use two arrays, one for the value and another for the symbol. Both of these arrays would be pre-populated which gives O(1) space. The value and the symbol at the same index correspond to each other. I would calculate how many times the current value fits into the integer using Math.floor. if the count is greater than zero, I would do bulk string addition by taking the symbol at the current index and repeating it count times. This would be concatenated to the result string. Then I would subtract the value at the current index multipled by the count to the integer.

### Analysis

_Explain why certain approaches worked or didn’t._

- The first approach used objects in the mapping array, but the overhead of creating objects was uneccessary.
- My first approach also did not sort the object values in descending order.
- My first approach had a for loop inside of a while loop, which is less efficient than the single loop with bulk string addition.
- My first approach used an array to store the result, which I thought would be more efficient than string concatentation. However, since I was only adding to the end of the string, string concatenation is more efficient in this case.

-

### Was my final solution optimal?

- Yes, the final solution is optimal. It runs in O(1) time and space since the number of roman numeral symbols is fixed.
-

### What triggers or patterns did I find or miss?

- That using a pre-populated array is more efficient than creating objects on the fly.
- That the space complexity is determined by the constraints of the problem.
- ***

## Mistakes & Bugs

### Mistakes I keep making

- That complexity is always determined by the loops that are used. I need to remember to consider the constraints of the problem as well.
- To step through a simple example and see what the value of variables are at each step.
-

### Bugs to add to the Bug List

- ***

## Retrospective

### What could I have done differently?

- Started with a very simple example.
-

### Takeaways

- String concatenation can be just as efficient as using an array as long as the concatenation is only at the end of the string.
-

### Anything to add to my cheat sheet?

- If constraints limit input to a fixed range, treat space/time as O(1) when usage is bounded.
- Do not say "O(1) space" without noting the constraints that justify it.
- ***

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes |
| ------------------- | ------ | ----- |
| **Problem solving** | 2.5    |       |
| **Coding**          | 3      |       |
| **Verification**    | 1      |       |
| **Communication**   | 3      |       |

---
