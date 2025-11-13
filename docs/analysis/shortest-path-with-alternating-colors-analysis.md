# Complexity Analysis Report
**File:** leetcode/medium/1229-shortest-path-with-alternating-colors/shortest-path-with-alternating-colors.ts
**Generated:** 2025-11-13T01:06:33.425Z

## Time Complexity
**Estimated:** O(n)
**Description:** Linear time - single pass through data
**Confidence:** 52.7%

## Space Complexity
**Estimated:** O(1)
**Reason:** Constant extra space

## Data Structures Used
- **Array**: []
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)
- **Stack/Queue**: .push(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays
- **Stack/Queue**: .shift(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays

## Algorithmic Patterns
- **Two Pointers**: O(n)
  - Two pointers moving towards each other

## Code Metrics
- **Lines of Code:** 55
- **Cyclomatic Complexity:** 11
- **Max Nesting Level:** 5

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions