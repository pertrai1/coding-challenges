# Complexity Analysis Report
**File:** leetcode/medium/0018-4sum/4sum.ts
**Generated:** 2025-11-13T01:06:33.416Z

## Time Complexity
**Estimated:** O(1)
**Description:** Constant time - single operations
**Confidence:** 52.5%

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

## Algorithmic Patterns
- **Two Pointers**: O(n)
  - Two pointers moving towards each other

## Code Metrics
- **Lines of Code:** 33
- **Cyclomatic Complexity:** 13
- **Max Nesting Level:** 6

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions