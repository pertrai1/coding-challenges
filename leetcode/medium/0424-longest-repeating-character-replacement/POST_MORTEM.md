# Post-Mortem Log

## Problem

**[Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)** (LeetCode #424)

Given a string `s` of uppercase English letters and an integer `k`, find the length of the longest substring containing the same letter after performing at most `k` character replacements.

- **Problem Name:** Longest Repeating Character Replacement
- **Problem Link:** <https://leetcode.com/problems/longest-repeating-character-replacement/>
- **Date:** 2026-02-06

---

## Time Tracking

- **Time to design the algorithm:** ~5 minutes (pattern recognition was straightforward)
- **Time to code:** ~15 minutes (5 TDD cycles, incremental implementation)
- **Time debugging/fixing:** ~5 minutes (minimal - TDD caught issues early)

---

## Solution Exploration

### What approaches did I consider?

1. **Brute Force** - Check all possible substrings
   - For each starting position, try all ending positions
   - For each substring, count characters and check if replacements ≤ k
   - Time: O(n²) or O(n³) depending on implementation
   - Space: O(1) or O(26)

2. **Optimized Sliding Window** (Final Solution)
   - Use two pointers to maintain a window
   - Track character frequencies in the current window
   - A window is valid when: `window_length - max_frequency ≤ k`
   - Expand right pointer, shrink left when invalid
   - Time: O(n), Space: O(1)

### Final Solution Analysis

- **Time Complexity:** O(n) - single pass through the string with two pointers
- **Space Complexity:** O(1) - frequency map has at most 26 uppercase letters (constant)
- **Is it optimal?** Yes - we must examine each character at least once, so O(n) is optimal

### Why this approach worked (or didn't)

The sliding window approach works because:

- We only need to track the maximum frequency character in each window
- The key insight is that `window_length - max_frequency` tells us how many replacements we need
- As we slide the window, we maintain this invariant: needed replacements ≤ k
- We don't need to recalculate max frequency from scratch when shrinking - we just use the running max

**Trade-offs:**

- Sliding window requires careful boundary management
- But it's much more efficient than brute force
- The "trick" is realizing we don't need to recalculate maxFreq when shrinking (using the historical max is sufficient)

---

## Pattern Recognition

### What algorithmic pattern does this problem use?

**Variable-Size Sliding Window** with constraint tracking

### Key Insight

The "aha moment" is realizing that a window is valid if and only if:

```text
window_length - max_frequency_in_window ≤ k
```

This formula tells us: "If I keep the most common character and replace all others, do I stay within k replacements?"

We don't need to track which character to keep or replace - just count frequencies and apply this formula.

### Related Problems

1. **LeetCode 3: Longest Substring Without Repeating Characters**
   - Similar sliding window pattern, different constraint

2. **LeetCode 1004: Max Consecutive Ones III**
   - Nearly identical problem structure (can flip at most k zeros)

3. **LeetCode 340: Longest Substring with At Most K Distinct Characters**
   - Variable sliding window with k constraint

4. **LeetCode 209: Minimum Size Subarray Sum**
   - Variable sliding window finding minimum instead of maximum

---

## Edge Cases & Verification

### What clarifying questions did I ask?

- What if k = 0? (No replacements allowed)
- What if k is very large? (Can replace entire string)
- What if the string is already all one character?
- What about single-character strings?

### Edge cases handled

- ✅ All characters different, k=0 → returns 1
- ✅ All characters the same → returns string length
- ✅ Single character string → returns 1
- ✅ k larger than needed → returns full string length
- ✅ Both example cases from problem statement

### Edge cases missed

- None identified - test coverage appears comprehensive

---

## Mistakes & Bugs

### Mistakes I keep making

- Initial hardcoded return in Cycle 1 was intentional (TDD principle)
- No significant bugs encountered during implementation
- The TDD approach prevented common sliding window mistakes:
  - Off-by-one errors in window size calculation
  - Forgetting to update frequency map when shrinking window
  - Not handling edge cases incrementally

### Bugs to add to the Bug List

- N/A - clean implementation from the start due to TDD

---

## Retrospective

### Key Takeaways & Lessons Learned

1. **TDD forces simplicity first** - Starting with a hardcoded value felt silly but led to a natural progression
2. **The window validity formula is the key** - Once you understand `len - maxFreq ≤ k`, implementation is straightforward
3. **Edge case testing prevented bugs** - Adding tests for k=0, single char, all same chars caught potential issues early
4. **Pattern recognition accelerates solving** - Recognizing this as a sliding window problem immediately suggested the approach
5. **TDD cycles build confidence** - Each passing test confirmed the algorithm was on the right track

### Add to Cheat Sheet

**Variable Sliding Window Template:**

```typescript
function slidingWindow(s: string, k: number): number {
  const freq: Record<string, number> = {};
  let maxFreq = 0;
  let maxResult = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // Expand: add right element
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    maxFreq = Math.max(maxFreq, freq[s[right]]);

    // Shrink: while window is invalid
    while (WINDOW_INVALID_CONDITION) {
      freq[s[left]]--;
      left++;
    }

    // Update result
    maxResult = Math.max(maxResult, right - left + 1);
  }

  return maxResult;
}
```

**Key Formula for this problem:**

- Window is valid when: `windowLength - maxFreq ≤ k`
- Window size: `right - left + 1`

---

## Rubric Self-Rating (1–5)

| Category            | Rating | Notes                                                                  |
| ------------------- | ------ | ---------------------------------------------------------------------- |
| **Problem solving** | 5      | Correctly identified pattern, understood key insight, optimal solution |
| **Coding**          | 5      | Clean implementation, good variable names, proper TypeScript types     |
| **Verification**    | 5      | Comprehensive test coverage, all edge cases handled                    |
| **Communication**   | 5      | Clear test names, well-commented code, followed TDD discipline         |

---
