function commonChars(words: string[]): string[] {
    if (words.length === 0) return [];

    let commonChars = words[0].split('');

    for (let i = 1; i < words.length; i++) {
        const currentWordChars = words[i].split('');
        commonChars = commonChars.filter((char) => {
        const index = currentWordChars.indexOf(char);
        if (index !== -1) {
            currentWordChars.splice(index, 1);
            return true;
        }

        return false;
        })
    }

    return commonChars;
};