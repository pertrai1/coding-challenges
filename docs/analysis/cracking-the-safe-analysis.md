# Complexity Analysis Report
**File:** leetcode/hard/0754-cracking-the-safe/cracking-the-safe.ts
**Generated:** 2025-11-13T01:06:33.414Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 52.8%

## Space Complexity
**Estimated:** O(n)
**Reason:** Recursive call stack

## Data Structures Used
- **Array**: []
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)
- **Stack/Queue**: .push(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays

## Code Metrics
- **Lines of Code:** 21
- **Cyclomatic Complexity:** 5
- **Max Nesting Level:** 5

## Recommendations
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions