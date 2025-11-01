function canPermutePalindrome(s: string): boolean {
    // Using a Map is O(n) space
    // const charCount = new Map<string, number>();
    // Using a fixed array of size 26 is O(1) space
    const chars = new Array(26).fill(0);
    for (const char of s) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        chars[index]++;
    }

    let oddCount = 0;
    for (const count of chars) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
};