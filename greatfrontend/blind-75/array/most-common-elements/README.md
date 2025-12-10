# Most Common Elments

Given an array of integers numbers and a number k, find the k most frequent numbers in the array. Here, k represents the number of elements that should be returned, which are the ones that appear the most frequently. The order of the result does not matter.

## Input

- `numbers: number[]`: An array of integers
- `k`: An integer

## Examples

```bash
Input: numbers = [4,4,4,6,6,5,5,5], k = 2
Output: [4,5]
Explanation: The two most frequent numbers are 4 and 5, as they appear the most often in the array.

Input: numbers = [7,7,7,8,8,9,9,9], k = 3
Output: [7,9,8]
Explanation: The three most frequent numbers are 7, 9, and 8.

Input: numbers = [10,10,10,10,10], k = 1
Output: [10]
Explanation: Since there is only one unique number, 10, it is the most frequent.
```

## Constraints

- 1 <= `numbers.length` <= 1000
- -10,000 <= `numbers[i]` <= 10,000
- 1 <= `k` <= Number of unique elements in `numbers`
- The solution is guaranteed to have a unique result
