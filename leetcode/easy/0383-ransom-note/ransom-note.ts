function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomFrequency = new Map<string, number>();
    for (const letter of ransomNote) {
        ransomFrequency.set(letter, (ransomFrequency.get(letter) || 0) + 1);
    }
    for (const letter of magazine) {
        if (ransomFrequency.has(letter)) {
            const count = ransomFrequency.get(letter);
            if (count - 1 >= 0) {
                ransomFrequency.set(letter, count - 1);
            }
        }
    }
    return Array.from(ransomFrequency).every((val) => val[1] === 0);
};