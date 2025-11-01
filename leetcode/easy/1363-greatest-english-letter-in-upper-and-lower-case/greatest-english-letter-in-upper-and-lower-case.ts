function greatestLetter(s: string): string {
    const lowerCaseSet = new Set();
    const upperCaseSet = new Set();
    for (const letter of s) {
        if (letter.toUpperCase() === letter) {
            upperCaseSet.add(letter);
        } else {
            lowerCaseSet.add(letter);
        }
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = alphabet.length - 1; i >= 0; i--) {
        if (upperCaseSet.has(alphabet[i].toUpperCase()) && lowerCaseSet.has(alphabet[i])) {
            return alphabet[i].toUpperCase();
        }
    }
    return "";
};