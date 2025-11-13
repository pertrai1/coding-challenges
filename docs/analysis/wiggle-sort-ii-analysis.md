# Complexity Analysis Report
**File:** leetcode/medium/0324-wiggle-sort-ii/wiggle-sort-ii.ts
**Generated:** 2025-11-13T01:06:33.421Z

## Time Complexity
**Estimated:** O(n)
**Description:** Linear time - single pass through data
**Confidence:** 50.7%

## Space Complexity
**Estimated:** O(n)
**Reason:** Recursive call stack

## Data Structures Used
- **Array**: []
  - access: O(1)
  - search: O(n)
  - insertion: O(1) amortized
  - deletion: O(n)

## Algorithmic Patterns
- **Two Pointers**: O(n)
  - Two pointers moving towards each other

## Code Metrics
- **Lines of Code:** 237
- **Cyclomatic Complexity:** 41
- **Max Nesting Level:** 5

## Recommendations
- **REFACTORING**: High cyclomatic complexity detected. Consider breaking down into smaller functions
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions