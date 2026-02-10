# Post-Mortem Log

## Problem

Find all unique triplets in an integer array that sum to zero. The challenge is to avoid duplicate triplets in the result while efficiently searching through potentially large arrays.

- **Problem Name:** 3Sum
- **Problem Link:** [LeetCode #15 - 3Sum](https://leetcode.com/problems/3sum/)
- **Date:** 2026-02-09

---

## Time Tracking

- **Time to design the algorithm:** ~15 minutes (through pattern checkpoint and guided questions)
- **Time to code:** ~20 minutes (6 TDD cycles with iterations)
- **Time debugging/fixing:** ~10 minutes (understanding nested loop structure and duplicate handling)

---

## Solution Exploration

### What approaches did I consider?

1. **Brute Force (O(n³))**: Three nested loops checking every possible triplet combination. Would work but too slow for large inputs (n ≤ 3000).

2. **Hash Map Approach (O(n²))**: For each pair, check if the complement exists in a hash set. More complex duplicate handling required.

3. **Sort + Two Pointers (O(n² + n log n) = O(n²))**: **Chosen approach**. Sort the array first, then for each element, use two pointers to find pairs that sum to the target. Sorting enables efficient duplicate skipping.

### Final Solution Analysis

- **Time Complexity:** O(n²)
  - Sorting: O(n log n)
  - Outer loop: O(n)
  - Inner two-pointer scan: O(n) per iteration
  - Total: O(n log n + n²) = O(n²)

- **Space Complexity:** O(1)
  - Not counting the output array, only using constant extra space (pointers and sum variable)
  - If counting output: O(k) where k is the number of triplets found

- **Is it optimal?** Yes. This is the optimal solution for the 3Sum problem. We cannot do better than O(n²) because we must examine at least n² pairs to find all valid triplets.

### Why this approach worked (or didn't)

The sort + two-pointers approach is optimal because:

- **Sorting enables systematic search**: After sorting, we can use the two-pointer technique to efficiently search for pairs
- **Early termination**: If `nums[i] > 0`, we can stop early (all remaining numbers are positive)
- **Duplicate avoidance**: In a sorted array, duplicates are adjacent, making them easy to skip
- **No extra space**: Unlike hash map approaches, we only use O(1) extra space

---

## Pattern Recognition

### What algorithmic pattern does this problem use?

**Two Pointers (Opposite Direction)** with a fixed element. More specifically, this uses the "Fixed Element + Two Pointers" variant:

- Outer loop fixes one element at position `i`
- Inner loop uses two pointers (`left` and `right`) to search the remaining sorted subarray for pairs that sum to `-nums[i]`

### Key Insight

The "aha moment" for 3Sum is realizing it's **not** a single two-pointer problem, but a **nested structure**: **3Sum = TwoSum repeated n times**.

For each fixed element `nums[i]`, we're essentially solving the TwoSum problem on the remaining array: "Find two numbers that sum to `-nums[i]`". Because the array is sorted, we can use the efficient two-pointer technique for each TwoSum subproblem.

**Duplicate handling insight**: "No duplicate triplets" means no duplicate _arrays_ in the result, not no duplicate _values_ within a triplet. We handle this by skipping consecutive duplicate values for the fixed element `i`.

### Related Problems

1. **LeetCode #1 - Two Sum**: The foundation - finding two numbers that sum to a target
2. **LeetCode #16 - 3Sum Closest**: Similar structure, but finding the triplet closest to a target instead of exactly zero
3. **LeetCode #18 - 4Sum**: Extends the pattern to four numbers (adds another outer loop)
4. **LeetCode #167 - Two Sum II (Sorted Array)**: The two-pointer technique used in the inner loop

---

## Edge Cases & Verification

### What clarifying questions did I ask?

(In coach mode, the pattern checkpoint questions served as clarifying questions)

- What pattern applies? (Two pointers with nested structure)
- What variables are needed? (i, left, right, result array)
- What invariant must hold? (Systematic search of sorted space)

### Edge cases handled

- ✅ **Empty array**: Returns `[]`
- ✅ **Array with fewer than 3 elements**: Returns `[]`
- ✅ **All zeros**: Returns `[[0, 0, 0]]`
- ✅ **No valid triplets**: Returns `[]` (e.g., `[0, 1, 1]` or all positive numbers)
- ✅ **Duplicate values in triplets**: Correctly includes triplets like `[-1, -1, 2]`
- ✅ **Duplicate triplets**: Correctly avoids adding the same triplet twice by skipping duplicate `i` values

### Edge cases missed

- ⚠️ **Optimization**: Could skip duplicate `left` and `right` values after finding a match for better performance on arrays with many duplicates
- ⚠️ **Early termination**: Could break early if `nums[i] > 0` (all remaining numbers are positive, so no triplet can sum to zero)

---

## Mistakes & Bugs

### Mistakes I keep making

1. **Misunderstanding "no duplicates"**: Initially confused "no duplicate triplets" with "no duplicate values within a triplet"
2. **Pointer initialization**: Started with `left = 1` instead of `left = i + 1`, causing incorrect results when `i > 0`
3. **Breaking too early**: Used `break` after finding one match, stopping the search prematurely instead of continuing to find all valid triplets
4. **Single-pass misunderstanding**: Tried to solve with a single two-pointer scan instead of nested structure (outer loop + inner two-pointer)

### Bugs to add to the Bug List

- **Bug**: Initializing pointers outside the loop and never resetting them
  - **Fix**: Reset `left = i + 1` and `right = nums.length - 1` for each iteration of `i`
- **Bug**: Using `break` instead of moving both pointers after finding a match
  - **Fix**: After finding a match, do `left++` and `right--` to continue searching
- **Bug**: Checking for duplicate values within a triplet instead of duplicate triplet arrays
  - **Fix**: Skip duplicate `i` values with `if (i > 0 && nums[i] === nums[i-1]) continue`

---

## Retrospective

### Key Takeaways & Lessons Learned

1. **Nested two-pointer pattern**: Some problems require combining patterns - 3Sum is "fixed element + two pointers", not just "two pointers"

2. **Sorting as preprocessing**: Sorting (O(n log n)) is often worth it if it enables a more efficient main algorithm (O(n²) vs O(n³))

3. **Read requirements carefully**: "No duplicate triplets" ≠ "no duplicate values" - understanding the exact requirement is crucial

4. **TDD reveals understanding gaps**: The iterative testing process exposed conceptual misunderstandings early (like pointer initialization and loop structure)

5. **Coach mode effectiveness**: Writing code yourself (vs watching the Navigator) forces deeper understanding of the pattern

### Add to Cheat Sheet

**Two Pointers (Fixed Element + Search) Pattern:**

```typescript
// Sort first
nums.sort((a, b) => a - b);

for (let i = 0; i < nums.length; i++) {
  // Skip duplicates for fixed element
  if (i > 0 && nums[i] === nums[i - 1]) continue;

  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[i] + nums[left] + nums[right];
    if (sum === target) {
      // Found match - move BOTH pointers
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
```

**Key principles:**

- Reset pointers for each fixed element
- Move both pointers after finding a match
- Skip adjacent duplicates in sorted array

---

## Rubric Self-Rating (1–5)

| Category                | Rating | Notes                                                                                                       |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| **Problem solving**     | 3/5    | Eventually identified the pattern, but struggled with nested structure initially. Needed Level 2 hints.     |
| **Coding**              | 4/5    | Code is clean and correct after iterations. Good variable names. Minor issues with pointer initialization.  |
| **Verification**        | 4/5    | Comprehensive test coverage (6 tests). Caught edge cases. Could have desk-checked logic earlier.            |
| **Communication**       | 3/5    | Pattern checkpoint answers showed partial understanding. Improved after guidance. Good code comments.       |
| **Complexity Analysis** | 3/5    | Correctly identified O(n²) time. Space complexity explanation could be clearer (said O(n²), actually O(1)). |

---
