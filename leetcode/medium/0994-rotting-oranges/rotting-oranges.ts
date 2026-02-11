export function orangesRotting(grid: number[][]): number {
  let freshCount: number = 0;
  let minutes = 0;

  // TODO: Initialize a queue with all initially rotten oranges (value 2)
  const queue = [];
  // INVARIANT: The queue contains [row, col, minutes] for each rotten orange at the start
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col, minutes]);
      }
    }
  }

  // TODO: Run BFS - while queue is not empty, process each rotten orange and rot adjacent fresh oranges
  // INVARIANT: Each level of BFS represents one minute passing; freshCount decreases as oranges rot
  while (queue.length > 0) {
    // how many oranges rot at this minutes
    const levelSize = queue.length;

    // process all oranges at this level
    for (let i = 0; i < levelSize; i++) {
      const [row, col] = queue.shift();

      // check all 4 neighbors
      if (row + 1 < grid.length && grid[row + 1][col] === 1) {
        queue.push([row + 1, col, minutes]);
        grid[row + 1][col] = 2;
        freshCount--;
      }
      if (row - 1 >= 0 && grid[row - 1][col] === 1) {
        queue.push([row - 1, col, minutes]);
        grid[row - 1][col] = 2;
        freshCount--;
      }

      if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
        queue.push([row, col + 1, minutes]);
        grid[row][col + 1] = 2;
        freshCount--;
      }
      if (col - 1 >= 0 && grid[row][col - 1] === 1) {
        queue.push([row, col - 1, minutes]);
        grid[row][col - 1] = 2;
        freshCount--;
      }
    }

    // after processing the whole level, increment minutes
    // but only if we actually added new rotten oranges to the queue
    if (queue.length > 0) {
      minutes++;
    }
  }

  // TODO: After BFS completes, if any fresh oranges remain, return -1; otherwise return the minutes elapsed
  // INVARIANT: freshCount === 0 means all oranges rotted successfully
  return freshCount > 0 ? -1 : minutes;
}
