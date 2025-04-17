function mostCommonWord(paragraph: string, banned: string[]): string {
    const words = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .split(" ")
    .filter(Boolean);
    const frequencyMap = new Map();
    for (const word of words) {
        const lowercaseWord = word.toLowerCase();
        if (!banned.includes(lowercaseWord)) {
        frequencyMap.set(
            lowercaseWord,
            (frequencyMap.get(lowercaseWord) || 0) + 1
        );
        }
    }
    const sortedWords = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);
    return sortedWords[0][0];
};