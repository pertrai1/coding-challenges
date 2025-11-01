function boldWords(words: string[], s: string): string {
    if (s.trim() === '') {
        return s;
    }

    const boldChars = Array.from({ length: s.length }, () => 0);
    for (const word of words) {
        if (word.trim() === '') continue;
        for (let i = 0; i < s.length; i++) {
            const substr = s.slice(i, i + word.length);
            if (substr.toLowerCase() === word.toLowerCase()) {
                boldChars.fill(1, i, i + word.length);
            }
        }
    }

    let highlightedText = '';
    for (let i = 0; i < s.length; i++) {
        const needsOpeningTag = boldChars[i] === 1 && boldChars[i - 1] !== 1;
        const needsClosingTag = boldChars[i] === 1 && boldChars[i + 1] !== 1;
        let chars = s[i];
        if (needsOpeningTag) {
            chars = '<b>' + chars;
        }
        if (needsClosingTag) {
            chars = chars + '</b>';
        }
        highlightedText += chars;
    }
    return highlightedText;
};