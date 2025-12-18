function wordBreak(s: string, wordDict: string[]): boolean {
  const len = s.length;
  const dp = Array.from({ length: len + 1 }, () => false);
  dp[0] = true; // Empty string is always valid

  // Convert wordDict to Set for O(1) lookup
  const wordSet = new Set(wordDict);

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};