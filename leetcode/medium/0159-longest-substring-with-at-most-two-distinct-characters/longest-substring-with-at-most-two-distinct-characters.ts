function lengthOfLongestSubstringTwoDistinct(s: string): number {
    const length = s.length
    const frequencyMap = new Map<string, number>();
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < length; right++) {
        const current = s[right];
        frequencyMap.set(current, (frequencyMap.get(current) || 0) + 1);

        while (frequencyMap.size > 2) {
            const leftChar = s[left];
            frequencyMap.set(leftChar, frequencyMap.get(leftChar)! - 1);
            if (frequencyMap.get(leftChar) === 0) {
                frequencyMap.delete(leftChar);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};