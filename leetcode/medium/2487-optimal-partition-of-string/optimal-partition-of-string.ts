function partitionString(s: string): number {
    let currentChars = new Set();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (currentChars.has(s[i])) {
            currentChars = new Set();
            count++;
        currentChars.add(s[i]);
        } else {
            currentChars.add(s[i]);
        }
    }
    if (currentChars.size > 0) {
        count++;
    }
    return count;
};