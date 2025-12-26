/**
 * @time - O(m * n) where each character in n is iterated for each character in m
 * @space - O(m * n) because of the 2D array of size (m + 1) * (n + 1)
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  // keep track of previous subsequences that have been calculated
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // iterative through each character in text1
  for (let i = 1; i <= m; i++) {
    // iterative through each character in text2 for the current character in text1
    for (let j = 1; j <= n; j++) {
      // do the characters match?
      if (text1[i - 1] === text2[j - 1]) {
        // yes, add 1 to the previous LCS
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // no, take the max length of skipping either the current character from text1 or text2
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // return the last item in the 2D DP array
  return dp[m][n];
}
