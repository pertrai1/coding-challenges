function countSubIslands(grid1: number[][], grid2: number[][]): number {
    const m = grid2.length;
    const n = grid2[0].length;
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1)  {
                if (dfs(i, j)) {
                    count += 1;
                }
            }
        }
    }
    function dfs(i: number, j: number): boolean {
        if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) return true;
        grid2[i][j] = 0;
        let isValid = grid1[i][j] === 1;
        isValid = dfs(i - 1, j) && isValid;
        isValid = dfs(i + 1, j) && isValid;
        isValid = dfs(i, j - 1) && isValid;
        isValid = dfs(i, j + 1) && isValid;
        return isValid;
    }
    return count;
};