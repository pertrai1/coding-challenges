## 1. Problem Restatement

Given a sorted array - hint binary search - return a sorted array with k number of elements that are closest to x.

## 2. Constraints & Edge Cases

- ## **Constraints:**

- `k` will be greater or equal to 1 and less than or equal to the array length.
- the array length will be greater or equal to 1 and less than or equal to 10 to the power of 4.
- the array is sorted in ascending order.
- any value in the array will be greater or equal to negative 10 to the power of 4.
- x will be less than 10 to the power of 4.

- ## **Edge Cases:**

## 3. Data Structures & Patterns

- **Data Structures:**

- array
- bitwise for small performance improvement when calculating the middle number between left and right split in half.

- **Algorithmic Patterns:**

- Make use of binary search to reduce the window down half each time.

## 4. Intuition

The array is sorted so that tells us that binary search is a possible way to tackle this problem. If that is the case we will want to have a variable to hold the value of the left and a variable to hold the value of the right. We will adjust the value based on the condition in the while loop on whether the left should increase or the right should decrease. Once the loop is done, we can take a slice of the array that starts at the left and ends at left + k.

## 5. Approach

## 6. Solution Walkthrough

## 7. Test Cases & Results

## 8. Complexity Analysis

- **Time Complexity:** O(log(n - k))
- **Space Complexity:** O(1)

## 9. Mistakes & Pitfalls

## 10. Alternate Approaches

## 11. Key Takeaways

- Learned that bitwise operator for getting the mid `(left + right) >> 1` has small performance improvements over using `Math.floor((left + right) / 2)`
