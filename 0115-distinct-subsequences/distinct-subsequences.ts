/**
 * @time - O(sLen * tLen) where sLen is the length of s and tLen is the length of t
 * @space - O(tLen) where tLen is the length of t 
 */
function numDistinct(s: string, t: string): number {
  const sLen = s.length;
  const tLen = t.length;

  // Counting as we go. Start with 0 for each character since we have not found any letters yet
  const dp = Array.from({ length: t.length + 1 }, () => 0);
  // There is 1 way to make an empty string
  dp[0] = 1;

  // Go through each letter in s
  for (let i = 1; i <= sLen; i++) {
    // Go backwards to make sure we are using values from previous calculations
    for (let j = tLen; j >= 1; j--) {
      // If the current character in s matches the current character in t
      if (s[i - 1] === t[j - 1]) {
        // Add the ways:
        // dp[j] = ways without using this character
        // dp[j - 1] = ways to make the shorter string (one less letter)
        // total = both ways combined
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  }

  // The number of distinct subsequences is at the end
  return dp[t.length];
}