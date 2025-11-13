# Complexity Analysis Report
**File:** leetcode/medium/0820-find-eventual-safe-states/find-eventual-safe-states.ts
**Generated:** 2025-11-13T01:06:33.424Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 52.3%

## Space Complexity
**Estimated:** O(n)
**Reason:** Additional data structures

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

## Code Metrics
- **Lines of Code:** 33
- **Cyclomatic Complexity:** 11
- **Max Nesting Level:** 4

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions