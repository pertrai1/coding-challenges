# Complexity Analysis Report
**File:** leetcode/hard/0269-alien-dictionary/alien-dictionary.ts
**Generated:** 2025-11-13T01:06:33.413Z

## Time Complexity
**Estimated:** O(n²)
**Description:** Quadratic time - nested iteration
**Confidence:** 52.2%

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
- **Lines of Code:** 52
- **Cyclomatic Complexity:** 15
- **Max Nesting Level:** 5

## Recommendations
- **OPTIMIZATION**: Consider using hash maps or more efficient algorithms to reduce O(n²) complexity
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions