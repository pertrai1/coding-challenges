# 11. Container With Most Water

**Difficulty:** ![Medium](https://img.shields.io/badge/Medium-orange)

**Link:** [Container With Most Water - LeetCode](https://leetcode.com/problems/container-with-most-water/)

## Problem Description

Given an integer array `height` of length `n` where `n` vertical lines are drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container such that the container holds the most water.

Return the maximum amount of water a container can store.

**Note:** You may not slant the container.

## Examples

### Example 1

```text
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
```

**Explanation:** The vertical lines at indices 1 (height = 8) and 8 (height = 7) form a container with area = min(8,7) × (8-1) = 7 × 7 = 49

### Example 2

```text
Input: height = [1,1]
Output: 1
```

## Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`
