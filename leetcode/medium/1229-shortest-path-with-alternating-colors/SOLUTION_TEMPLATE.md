## 1. Problem Restatement

We are given 2 2d arrays where each inner array is directed edge from a -> b. Return an answer where the value at the index is the shortest path such that each index alternates between the colors.

## 2. Constraints & Edge Cases

- ## **Constraints:**

- `1 <= n <= 100`
- `0 <= redEdges.length, blueEdges.length <= 400`
- `redEdges[i].length == blueEdges[i].length == 2`
- `0 <= a[i], b[i], u[j], v[j] < n`

- ## **Edge Cases:**

## 3. Data Structures & Patterns

- **Data Structures:**

- Use adjacency lists to build list for the red and for the blue
- Use an array to keep track of the distances
- Use a queue to keep track of how many edges there are still to traverse
- Use dequeue pointer index rather than shift() which will require changing the array each time

- **Algorithmic Patterns:**

- Use breadth first search since we are looking for the shortest path

## 4. Intuition

Because I saw that the requirement is to get the shortest path, I felt that breadth first search would be the best candidate to handle solving this problem.

## 5. Approach

- Build a 2d array (adjacency list) for both the red and the blue
- Build a distance array that holds 0 and 1 for the colors
- Start each color in the distance at 0, meaning `distance[0][0] = 0` and `distance[1][0] = 0`
- Use a queue that can be used to cycle through the distances
- Use a pointer index that is incremented for getting the node and color at the index in the queue
- loop through each array in the red and blue adjacency lists
- Setup an array that can be returned
- Loop through n
- Return the min of the distance of red or blue

## 6. Solution Walkthrough

| Input     | Steps & State Changes | Output |
| --------- | --------------------- | ------ |
| `[1,2,3]` | …                     | …      |

## 7. Test Cases & Results

| Test Case      | Expected | Actual | Notes               |
| -------------- | -------- | ------ | ------------------- |
| `[]`           | `0`      | `0`    | Handled empty input |
| `[-1, -2, -3]` | …        | …      |                     |

## 8. Complexity Analysis

- **Time Complexity:** O(V + E) where V is the number of vertices (n) and E is the total number of edges (redEdges.length + blueEdges.length)
- **Space Complexity:** O(V + E)

## 9. Mistakes & Pitfalls

- **Issue:**

- Incorrect setup of the adjacency lists setting Infinity rather than building up the edges
- Wrong structure for the distance
- Started by using `pop()` rathar than `shift()` for a queue.
- Iterated over edge arrays instead of neighbors

- **Discovery:** None
- **Fix:** None

## 10. Alternate Approaches

- **Approach A:** queue using shift (O(V + E))
- **Approach B:** queue with pointer index (O(1))

## 11. Key Takeaways

- Use pointer index for returning value from queue rather than `shift()`
- Take more time to understand what is being build in the adjacency list and how to initialize.
