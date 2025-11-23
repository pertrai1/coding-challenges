📋 Analysis Results:

# 🔍 Automated Complexity Analysis

> ⚠️ **Disclaimer**: This is an automated analysis that may not be 100% accurate.
> Always verify the complexity analysis manually, especially for complex algorithms.
> Dynamic Programming, recursive, and mathematical algorithms may need manual review.

**File:** leetcode/hard/0689-maximum-sum-of-3-non-overlapping-subarrays/maximum-sum-of-3-non-overlapping-subarrays.ts
**Generated:** 2025-11-23T13:56:23.542Z

## Time Complexity

**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 51.2%

> ⚠️ **Low Confidence**: Please manually verify this analysis.

## Space Complexity

**Estimated:** O(n)
**Reason:** Recursive call stack

## Data Structures Used

- **Array**: []
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)
- **Array**: new Array
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)

## Algorithmic Patterns

- **Sliding Window**: O(n)
  - Sliding window technique for subarray/substring problems

## Code Metrics

- **Lines of Code:** 46
- **Cyclomatic Complexity:** 15
- **Max Nesting Level:** 3

## Recommendations

- **ALGORITHM**: 🪟 **Sliding Window Detected**: For subarray/substring problems, sliding window typically has O(n) time complexity with single pass through data
- **VERIFICATION**: ⚠️ **Manual Review Needed**: Low confidence score suggests manual verification is required
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions
