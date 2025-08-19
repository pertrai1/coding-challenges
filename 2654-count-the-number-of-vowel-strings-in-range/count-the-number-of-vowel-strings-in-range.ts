function vowelStrings(words: string[], left: number, right: number): number {
    let count = 0;
    const vowels = "aeiou";
    for (let i = left; i <= right; i++) {
        const [first, last] = [words[i][0], words[i][words[i].length - 1]];
        if (vowels.includes(first) && vowels.includes(last)) {
            count++;
        }
    }
    return count;
};