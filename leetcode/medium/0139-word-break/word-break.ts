/**
 * @time - O(n3) is the worst case because of the nested loop and the string slicing. If a Trie was used, this would have went down to O(m x k) where m = words, k = avg word length
 * @space -  O(n) auxiliary space where n is the length of the string. The total space including inputs is O(n + m x k)
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
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
}
