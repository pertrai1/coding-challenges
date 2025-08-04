function titleToNumber(columnTitle: string): number {
    let total = 0;
    for (const character of columnTitle) {
        total = total * 26 + (character.toLowerCase().charCodeAt(0) - 96);
    }
    return total;
};