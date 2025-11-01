function findRepeatedDnaSequences(s: string): string[] {
    const seen = new Set<string>();
    const repeated = new Set<string>();

    for (let i = 0; i <= s.length - 10; i++) {
        const substr = s.slice(i, i + 10);
        if (seen.has(substr)) {
            repeated.add(substr);
        } else {
            seen.add(substr);
        }
    }

    return Array.from(repeated);
}