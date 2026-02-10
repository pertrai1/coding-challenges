export function orangesRotting(grid: number[][]): number {
  let freshCount: number = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) {
    return 0;
  }

  // TODO: Initialize a queue with all initially rotten oranges (value 2)
  // INVARIANT: The queue contains [row, col, minutes] for each rotten orange at the start

  // TODO: Run BFS - while queue is not empty, process each rotten orange and rot adjacent fresh oranges
  // INVARIANT: Each level of BFS represents one minute passing; freshCount decreases as oranges rot

  // TODO: After BFS completes, if any fresh oranges remain, return -1; otherwise return the minutes elapsed
  // INVARIANT: freshCount === 0 means all oranges rotted successfully

  return -1;
}
