# Post-Mortem Log

## Problem

Given an integer array `height` representing n vertical lines, find two lines that together with the x-axis form a container that holds the most water. Return the maximum water area.

- **Problem Name:** Container With Most Water
- **Problem Link:** [LeetCode #11](https://leetcode.com/problems/container-with-most-water/)
- **Date:** 2026-02-07

---

## Time Tracking

- **Time to design the algorithm:** ~5 minutes
- **Time to code:** ~10 minutes (5 TDD cycles)
- **Time debugging/fixing:** 0 minutes (TDD approach prevented bugs)

---

## Solution Exploration

### What approaches did I consider?

1. **Brute Force (O(n²))**: Check every pair of lines
   - Time: O(n²), Space: O(1)
   - Nested loops to compare all possible containers
   - Works but too slow for n ≤ 10⁵

2. **Two Pointers (Optimal - O(n))**: Start wide, move inward strategically
   - Time: O(n), Space: O(1)
   - Start with widest container (left=0, right=n-1)
   - Move the pointer at the shorter height inward
   - This is the optimal solution

### Final Solution Analysis

- **Time Complexity:** O(n) - single pass through the array
- **Space Complexity:** O(1) - only constant extra space
- **Is it optimal?** Yes - we must examine at least O(n) elements to find the maximum, and we do exactly that in one pass

### Why this approach worked (or didn't)

The two-pointer approach works because of a key greedy insight: when we have a container formed by left and right pointers, the area is limited by the shorter height. Moving the taller height inward can only decrease the area (width decreases, height stays limited by the shorter side). However, moving the shorter height inward gives us a chance to find a taller line that could increase the area despite the reduced width.

---

## Pattern Recognition

### What algorithmic pattern does this problem use?

- **Two Pointers (Opposite Ends)**
- **Greedy Algorithm**

### Key Insight

The "aha moment" is recognizing that we should **always move the pointer at the shorter height** inward. This is because:

1. The container's height is limited by `min(height[left], height[right])`
2. The width is `right - left`
3. Moving inward always decreases width
4. Moving the taller pointer cannot increase the min height (still limited by shorter side)
5. Moving the shorter pointer might find a taller line, potentially increasing area

This greedy choice is safe because we can prove we won't miss the optimal solution.

### Related Problems

- [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) - Similar two-pointer approach with height constraints
- [15. 3Sum](https://leetcode.com/problems/3sum/) - Two pointers after sorting
- [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) - Classic two-pointer pattern

---

## Edge Cases & Verification

### What clarifying questions did I ask?

- Can heights be zero? (Yes, based on constraints)
- What's the minimum array length? (2, as stated in constraints)
- Can we slant the container? (No, area is always a rectangle)

### Edge cases handled

- Minimum length array (2 elements)
- All same heights
- Strictly increasing heights
- Heights with zeros
- Large arrays (up to 10⁵ elements)

### Edge cases missed

None - the TDD approach helped us systematically cover edge cases.

---

## Mistakes & Bugs

### Mistakes I keep making

- None in this session - TDD helped prevent common mistakes like:
  - Off-by-one errors in pointer movement
  - Incorrect area calculation
  - Missing edge cases

### Bugs to add to the Bug List

- N/A - Clean implementation on first try thanks to TDD

---

## Retrospective

### Key Takeaways & Lessons Learned

1. **TDD is powerful for algorithmic problems**: Writing tests first helped clarify the problem requirements and catch edge cases early
2. **Greedy algorithms need proof**: The key insight (move shorter pointer) needed logical reasoning to verify correctness
3. **Two-pointer patterns are efficient**: When searching for pairs/subarrays, consider if two pointers can reduce O(n²) to O(n)
4. **Start simple, then optimize**: First test was the simplest case, which helped verify the core algorithm logic

### Add to Cheat Sheet

**Two Pointers (Opposite Ends) Template:**

```typescript
function twoPointerOppositeEnds(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let result = 0; // or other initial value

  while (left < right) {
    // Calculate current value
    const current = /* some calculation */;
    result = Math.max(result, current);

    // Move pointers based on problem-specific logic
    if (/* condition */) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}
```

**Container With Most Water Formula:**
`area = min(height[left], height[right]) × (right - left)`

---

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes                                                                 |
| ------------------- | ------ | --------------------------------------------------------------------- |
| **Problem solving** | 5      | Identified optimal O(n) solution immediately, understood greedy logic |
| **Coding**          | 5      | Clean implementation, no bugs, good variable names                    |
| **Verification**    | 5      | TDD approach ensured comprehensive test coverage and edge cases       |
| **Communication**   | 5      | Clear understanding of algorithm and ability to explain the logic     |

---
