function makeFancyString(s: string): string {
    const output: string[] = [];
    for (const ch of s) {
        if (ch === output[output.length - 1] && ch === output[output.length - 2]) {
            continue;
        } else {
            output.push(ch);
        }
    }
    return output.join('')
};