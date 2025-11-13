# Complexity Analysis Report
**File:** leetcode/medium/0444-sequence-reconstruction/sequence-reconstruction.ts
**Generated:** 2025-11-13T01:06:33.422Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 51.3%

## Space Complexity
**Estimated:** O(n)
**Reason:** Additional data structures

## Data Structures Used
- **Array**: []
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)
- **Set**: new Set()
  - access: O(1) average
  - search: O(1) average
  - insertion: O(1) average
  - deletion: O(1) average
- **Set**: Set(
  - access: O(1) average
  - search: O(1) average
  - insertion: O(1) average
  - deletion: O(1) average
- **Stack/Queue**: .push(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays
- **Stack/Queue**: .shift(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays

## Code Metrics
- **Lines of Code:** 50
- **Cyclomatic Complexity:** 19
- **Max Nesting Level:** 4

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions