export function orangesRotting(grid: number[][]): number {
  let freshCount: number = 0;
  let minutes = 0;

  const queue: number[][] = [];

  // Initialize queue with all initially rotten oranges and count fresh oranges
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      } else if (grid[row][col] === 1) {
        freshCount++;
      }
    }
  }

  // BFS: Process oranges level-by-level (each level = 1 minute)
  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const [row, col] = queue.shift()!;

      // Check all 4 neighbors
      if (row + 1 < grid.length && grid[row + 1][col] === 1) {
        queue.push([row + 1, col]);
        grid[row + 1][col] = 2;
        freshCount--;
      }
      if (row - 1 >= 0 && grid[row - 1][col] === 1) {
        queue.push([row - 1, col]);
        grid[row - 1][col] = 2;
        freshCount--;
      }
      if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
        queue.push([row, col + 1]);
        grid[row][col + 1] = 2;
        freshCount--;
      }
      if (col - 1 >= 0 && grid[row][col - 1] === 1) {
        queue.push([row, col - 1]);
        grid[row][col - 1] = 2;
        freshCount--;
      }
    }

    if (queue.length > 0) {
      minutes++;
    }
  }

  return freshCount > 0 ? -1 : minutes;
}
