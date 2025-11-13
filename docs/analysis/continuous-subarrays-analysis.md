# Complexity Analysis Report
**File:** leetcode/medium/2868-continuous-subarrays/continuous-subarrays.ts
**Generated:** 2025-11-13T01:06:33.427Z

## Time Complexity
**Estimated:** O(log n)
**Description:** Logarithmic time - divide and conquer
**Confidence:** 55.1%

## Space Complexity
**Estimated:** O(n)
**Reason:** Additional data structures

## Data Structures Used
- **Array**: []
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)
- **Array**: Array.from
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)
- **Hash Map**: new Map()
  - access: O(1) average
  - search: O(1) average
  - insertion: O(1) average
  - deletion: O(1) average
- **Hash Map**: Map(
  - access: O(1) average
  - search: O(1) average
  - insertion: O(1) average
  - deletion: O(1) average
- **Stack/Queue**: .push(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays
- **Stack/Queue**: .pop(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays
- **Stack/Queue**: .shift(
  - push/pop: O(1)
  - shift/unshift: O(n) for arrays

## Algorithmic Patterns
- **Two Pointers**: O(n)
  - Two pointers moving towards each other
- **Sliding Window**: O(n)
  - Sliding window technique

## Code Metrics
- **Lines of Code:** 49
- **Cyclomatic Complexity:** 11
- **Max Nesting Level:** 4

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions