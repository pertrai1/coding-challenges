/**
 * @time - O(m * n) where m is the length of word 1 and n is the length of word2
 * @space - O(m * n) for the DP table
 */
export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D array with dimensions `(m + 1) x (n + 1)`
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Initialize base cases
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill the table using the recurrence
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1),
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1
      );
    }
  }

  return dp[m][n];
}
