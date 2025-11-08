function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) {
        return [];
    }

    const result: number[] = [];
    const patternFreq: number[] = new Array(26).fill(0);
    const windowFreq: number[] = new Array(26).fill(0);

    // Helper function to get character index
    const getCharIndex = (char: string): number => char.charCodeAt(0) - 'a'.charCodeAt(0);

    // Build pattern frequency array
    for (const char of p) {
        patternFreq[getCharIndex(char)]++;
    }

    const pLen = p.length;

    // Initialize window with first pLen characters
    for (let i = 0; i < pLen; i++) {
        windowFreq[getCharIndex(s[i])]++;
    }

    // Count how many characters have matching frequencies
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (patternFreq[i] === windowFreq[i]) {
            matches++;
        }
    }

    // Check if initial window is an anagram
    if (matches === 26) {
        result.push(0);
    }

    // Slide the window: i represents the START index of current window
    for (let i = 1; i <= s.length - pLen; i++) {
        const charToRemove = s[i - 1];
        const charToAdd = s[i + pLen - 1];

        const removeIdx = getCharIndex(charToRemove);
        const addIdx = getCharIndex(charToAdd);

        // Update matches count before modifying windowFreq
        if (windowFreq[removeIdx] === patternFreq[removeIdx]) matches--;
        if (windowFreq[addIdx] === patternFreq[addIdx]) matches--;

        // Update window frequency
        windowFreq[removeIdx]--;
        windowFreq[addIdx]++;

        // Update matches count after modifying windowFreq
        if (windowFreq[removeIdx] === patternFreq[removeIdx]) matches++;
        if (windowFreq[addIdx] === patternFreq[addIdx]) matches++;

        // Check if current window matches pattern
        if (matches === 26) {
            result.push(i);
        }
    }

    return result;
}