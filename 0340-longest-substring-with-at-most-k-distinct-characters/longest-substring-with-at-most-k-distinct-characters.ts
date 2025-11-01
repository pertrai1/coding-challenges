function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    if (k === 0) return 0;

    const characterCount = new Map<string, number>();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        characterCount.set(char, (characterCount.get(char) || 0) + 1);

        while (characterCount.size > k) {
            const leftChar = s[left];
            characterCount.set(leftChar, characterCount.get(leftChar)! - 1);
            if (characterCount.get(leftChar) === 0) {
                characterCount.delete(leftChar);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};