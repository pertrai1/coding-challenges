# Find Element in Rotated Array

Given a sorted and rotated array numbers containing unique elements and an integer target, return the index of target if it is in numbers, or -1 if it is not.

Rotating an array [a[0], a[1], a[2], ..., a[n-1]] once results in [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. Rotating it a second time results in [a[n-2], a[n-1], a[0], a[1], ..., a[n-3]].

Develop an algorithm that runs in O(log n) time complexity.

## Input

- `numbers: number[]`: An array of integers
- `target: number`: An integer

## Notes

Examples

```bash
Input: numbers = [0,1,2,3,4], target = 2
Output: 2
Explanation: The original array [0,1,2,3,4] was rotated 0 times and 2 is present at 2nd index in given array

Input: numbers = [2,3,4,0,1], target = 0
Output: 3
Explanation: The original array [0,1,2,3,4] was rotated 3 times and became [2,3,4,0,1]. 0 is present at 3rd index in given array

Input: numbers = [4], target = 2
Output: -1
Explanation: The original array [4] was rotated 0 times and became [4]. 2 is not present in the given array
```

### Constraints

- 1 <= `numbers.length` <= 1000
- -10,000 <= `numbers[i]` <= 10,000
- -10,000 <= `target` <= 10,000
