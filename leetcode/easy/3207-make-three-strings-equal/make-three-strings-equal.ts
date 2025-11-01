function findMinimumOperations(s1: string, s2: string, s3: string): number {
    const minLength = Math.min(s1.length, s2.length, s3.length);
    let maxCharacters = 0;
    for (let i = 0; i < minLength; i++) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) {
            maxCharacters += 1;
        } else {
            break;
        }
    }
    const s1MinOps = s1.length - maxCharacters;
    const s2MinOps = s2.length - maxCharacters;
    const s3MinOps = s3.length - maxCharacters;
    return maxCharacters === 0 ? - 1 : s1MinOps + s2MinOps + s3MinOps;
};