/**
 * Finds the length of the longest substring with the same letter after at most k replacements
 * @param s - Input string consisting of uppercase English letters
 * @param k - Maximum number of character replacements allowed
 * @returns Length of the longest valid substring
 */
export function characterReplacement(s: string, k: number): number {
  const charCount: Record<string, number> = {};
  let maxFreq = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // Add current character to window
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;

    // Update max frequency in current window
    maxFreq = Math.max(maxFreq, charCount[s[right]]);

    // If window is invalid (need more than k replacements), shrink from left
    while (right - left + 1 - maxFreq > k) {
      charCount[s[left]]--;
      left++;
    }

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
