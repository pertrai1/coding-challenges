# [Binary String With Substrings Representing 1 To N](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n) ![Medium](https://img.shields.io/badge/Medium-orange)

Given a binary string `s` and a positive integer `n`, return `true` _if the binary representation of all the integers in the range_ `[1, n]` _are **substrings** of_ `s`, _or_ `false` _otherwise_.

A **substring** is a contiguous sequence of characters within a string.

**Example 1:**

```bash
Input: s = "0110", n = 3
Output: true
```

**Example 2:**

```bash
Input: s = "0110", n = 4
Output: false
```

## Constraints

- `1 <= s.length <= 1000`
- `s[i]` is either `'0'` or `'1'`.
- `1 <= n <= 10^9`
