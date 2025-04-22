function countNegatives(grid: number[][]): number {
    // O(n + m)
    let numRows = grid.length;
    let numCols = grid[0].length;
    let row = numRows - 1;
    let col = 0;
    let count = 0;
    while (row >= 0 && col < numCols) {
        const currenValue = grid[row][col];
        if (currenValue < 0) {
            count += numCols - col;
            row--;
        } else {
            col++;
        }
    }
    return count;
};