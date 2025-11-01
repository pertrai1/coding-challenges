function maximumAmount(coins: number[][]): number {
    const m = coins.length;
    const n = coins[0].length;
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(3).fill(Infinity)));
    
    function solve(i: number, j: number, k: number) {
        if (i >= m || j >= n || k < 0) {
            return -Infinity;
        }
        if (i === m - 1 && j === n - 1) {
            if (coins[i][j] < 0 && k > 0) {
                dp[i][j][k] = 0;
            } else {
                dp[i][j][k] = coins[i][j];
            }
            return dp[i][j][k];
        }
        if (dp[i][j][k] !== Infinity) {
            return dp[i][j][k];
        }
        let answer = coins[i][j] + Math.max(solve(i + 1, j, k), solve(i, j + 1, k));
        if (coins[i][j] < 0) {
            answer = Math.max(answer, Math.max(solve(i + 1, j, k - 1), solve(i, j + 1, k - 1)));
        }
        dp[i][j][k] = answer;
        return dp[i][j][k];
    }
    return solve(0, 0, 2);
};