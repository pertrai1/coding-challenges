# [322. Coin Change](https://leetcode.com/problems/coin-change/)

![Medium](https://img.shields.io/badge/Medium-orange)

## Problem Description

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the **fewest number of coins** that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an **infinite number** of each kind of coin.

## Examples

### Example 1

**Input:** `coins = [1,2,5]`, `amount = 11`

**Output:** `3`

**Explanation:** 11 = 5 + 5 + 1

### Example 2

**Input:** `coins = [2]`, `amount = 3`

**Output:** `-1`

**Explanation:** Cannot form 3 using only coin 2.

### Example 3

**Input:** `coins = [1]`, `amount = 0`

**Output:** `0`

**Explanation:** Zero amount requires zero coins.

### Example 4

**Input:** `coins = [2,4]`, `amount = 7`

**Output:** `-1`

**Explanation:** Impossible to form odd amount using only even-valued coins.

## Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`
