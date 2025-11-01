// Space = O(m x n) | Time = O(m x n)
function longestIncreasingPath(matrix: number[][]): number {
    const rows = matrix.length;
    const cols = matrix[0].length;
    // Initialize dp array (m x n) with zeros
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    // Check 4 directions (up, down, left, right)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let maxLength = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Call DFS(i, j) to get path length
            const result = dfs(i, j);
            maxLength = Math.max(maxLength, result);
        }
    }

    return maxLength;

    function dfs(i: number, j: number): number {
        if (dp[i][j] !== 0) {
            return dp[i][j];
        }
        let maxPath = 1;

        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;

            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && matrix[ni][nj] > matrix[i][j]) {
                maxPath = Math.max(maxPath, 1 + dfs(ni, nj));
            }
        }

        // Cache the rest before returning
        dp[i][j] = maxPath;
        return maxPath;
    }
}
