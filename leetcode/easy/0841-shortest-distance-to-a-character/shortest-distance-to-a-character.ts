function shortestToChar(s: string, c: string): number[] {
    const result: number[] = new Array(s.length).fill(0);
    let lastPos = s.indexOf(c);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            lastPos = i; 
        }
        result[i] = Math.abs(i - lastPos);
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            lastPos = i;
        }
        result[i] = Math.min(result[i], Math.abs(i - lastPos));
    }
    return result;
};