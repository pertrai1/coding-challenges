# Complexity Analysis Report
**File:** leetcode/medium/0438-find-all-anagrams-in-a-string/find-all-anagrams-in-a-string.ts
**Generated:** 2025-11-13T01:06:33.422Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 51.5%

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

## Algorithmic Patterns
- **Sliding Window**: O(n)
  - Sliding window technique

## Code Metrics
- **Lines of Code:** 41
- **Cyclomatic Complexity:** 15
- **Max Nesting Level:** 3

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions