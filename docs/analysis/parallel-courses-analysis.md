# 🔍 Automated Complexity Analysis

> ⚠️ **Disclaimer**: This is an automated analysis that may not be 100% accurate.
> Always verify the complexity analysis manually, especially for complex algorithms.
> Dynamic Programming, recursive, and mathematical algorithms may need manual review.

**File:** leetcode/medium/1101-parallel-courses/parallel-courses.ts
**Generated:** 2025-11-16T01:45:45.760Z

## Time Complexity
**Estimated:** O(V + E)
**Description:** Graph traversal - visits each vertex and edge once
**Confidence:** 75.0%



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
- **Graph Traversal**: O(V + E)
  - Graph algorithms that visit each vertex and edge

## Code Metrics
- **Lines of Code:** 32
- **Cyclomatic Complexity:** 8
- **Max Nesting Level:** 5

## Recommendations
- **ALGORITHM**: 📊 **Graph Algorithm**: For clone graph, connected components, and graph traversal problems, expect O(V + E) time complexity where V=vertices, E=edges
- **READABILITY**: Deep nesting detected. Consider early returns or helper functions
