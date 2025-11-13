# Complexity Analysis Report
**File:** leetcode/medium/0922-possible-bipartition/possible-bipartition.ts
**Generated:** 2025-11-13T01:06:33.424Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 52.6%

## Space Complexity
**Estimated:** O(n)
**Reason:** Additional data structures

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
- **Stack/Queue**: .push(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays
- **Stack/Queue**: .shift(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays

## Code Metrics
- **Lines of Code:** 34
- **Cyclomatic Complexity:** 12
- **Max Nesting Level:** 7

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions