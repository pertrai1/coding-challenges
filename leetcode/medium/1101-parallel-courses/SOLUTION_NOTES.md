## 1. Problem Restatement

Input is the number of courses and an array of relations. The array is a 2d array where each inner array represents the previous course and the next course. The previous course has to be taken before the next course. In a semester, you can take any number of courses as long as the previous courses are completed in the previous semester.

Output is the minimum number of semesters needed to complete all of the courses. Return -1 if is is not possible to complete all of the courses.

## 2. Constraints & Edge Cases

### **Constraints:**

- `n` is greater or equal to 1 and less than or equal to 5000
- `relations` length is greater or equal to 1 and less than or equal to 5000
- `relations[i].length == 2`
- `prevCoursei` is greater or equal to 1
- `nextCoursei` is less than or equal to `n`
- `prevCoursei != nextCoursei`
- All the pairs `[prevCoursei, nextCoursei]` are unique.

### **Edge Cases:**

- If there are no relations, the output should be 1 since all courses can be taken in one semester.
- If there is a cycle in the relations, the output should be -1 since it is not possible to complete all courses.
- If there is only one course, the output should be 1 since it can be taken in one semester.

## 3. Data Structures & Patterns

- **Data Structures:**

- Adjacency List for graph representation
- Queue for BFS traversal
- Array for in-degree tracking

- **Algorithmic Patterns:**
- Topological Sorting using Kahn's Algorithm

## 4. Intuition

To solve the problem of determining the minimum number of semesters required to complete all courses given their prerequisites, we can model the courses and their dependencies as a directed graph. Each course is represented as a node, and a directed edge from node A to node B indicates that course A must be completed before course B can be taken.

## 5. Approach

1. **Graph Construction**: Create an adjacency list to represent the graph and an in-degree array to track the number of prerequisites for each course.
2. **Initialize Queue**: Use a queue to perform a breadth-first search (BFS). Start by adding all courses with an in-degree of 0 (no prerequisites) to the queue.
3. **BFS Traversal**: Process the courses in the queue:
   - For each course taken in the current semester, reduce the in-degree of its dependent courses by 1.
   - If any dependent course's in-degree becomes 0, add it to the queue for the next semester.
4. **Count Semesters**: Keep track of the number of semesters required to complete all courses.
5. **Cycle Detection**: If the number of courses processed is less than `n` after the BFS, it indicates a cycle in the graph, and we return -1.

## 6. Solution Walkthrough

| Input                                | Steps & State Changes | Output |
| ------------------------------------ | --------------------- | ------ |
| `n = 3`, `relations = [[1,3],[2,3]]` |                       | …      |

## 7. Test Cases & Results

| Test Case                                  | Expected | Actual | Notes                           |
| ------------------------------------------ | -------- | ------ | ------------------------------- |
| `n = 3`, `relations = [[1,3],[2,3]]`       | `2`      | `2`    | Basic test case                 |
| `n = 1`, `relations = []`                  | `1`      | `1`    | Single course, no prerequisites |
| `n = 3`, `relations = [[1,2],[2,3],[3,1]]` | `-1`     | `-1`   | Cycle in prerequisites          |

## 8. Complexity Analysis

- **Time Complexity:**
  O(n + r) where n is the number of courses and r is the number of relations

- **Space Complexity:**
  O(n + r) for the adjacency list and in-degree array

## 9. Mistakes & Pitfalls

- Incorrectly setup the graph direction in the adjacency list.
- Did not run a loop to check if all the courses were processed.

## 10. Alternate Approaches

- **Approach A:** DFS with cycle detection (O(n + r), more complex implementation)
- **Approach B:** Dynamic Programming with memoization (O(n^2), higher time complexity)

## 11. Key Takeaways

- Modeling course prerequisites as a directed graph allows for efficient traversal and cycle detection.
- Kahn's Algorithm for topological sorting is effective for problems involving dependencies.
- Always consider edge cases such as cycles and no prerequisites when designing the solution.
- Use pointer index rather than shifting the array because the shifting operation is more costly in terms of time complexity.
