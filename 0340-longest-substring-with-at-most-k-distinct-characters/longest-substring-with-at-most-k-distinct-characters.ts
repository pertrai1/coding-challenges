/**
 * @time - O(n) where n is the length of s
 *          (each character visited at most twice by sliding window pointers)
 * @space - O(k) where k is the maximum number of distinct characters allowed;
 *          the map stores at most k + 1 characters at any time before shrinking
 */
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    if (k === 0) return 0;

    const characterCount = new Map<string, number>();
    let left = 0;
    let maxLength = 0;

    // Expand the window by moving the right pointer
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // Add current character to frequency map
        characterCount.set(char, (characterCount.get(char) || 0) + 1);

        // Shrink the window from the left if we have more than k distinct characters
        while (characterCount.size > k) {
            const leftChar = s[left];
            characterCount.set(leftChar, characterCount.get(leftChar)! - 1);
            // Remove the character from the map if its count drops to zero
            if (characterCount.get(leftChar) === 0) {
              characterCount.delete(leftChar);
            }
            left++;
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};