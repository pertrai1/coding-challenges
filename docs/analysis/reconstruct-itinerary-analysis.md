# Complexity Analysis Report
**File:** leetcode/hard/0332-reconstruct-itinerary/reconstruct-itinerary.ts
**Generated:** 2025-11-13T01:06:33.413Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 52.7%

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
- **Lines of Code:** 31
- **Cyclomatic Complexity:** 8
- **Max Nesting Level:** 5

## Recommendations
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions