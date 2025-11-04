function longestSubstring(s: string, k: number): number {
    return helper(s, 0, s.length, k);
}
function helper(s: string, start: number, end: number, k: number): number {
    if (end - start < k) {
        return 0;
    }
    const freq = new Map<string, number>();
    for (let i = start; i < end; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    let allValid = true;
    for (let i = start; i < end; i++) {
        if (freq.get(s[i])! < k) {
            allValid = false;
            break;
        }
    }
    if (allValid) return end - start;

    let maxLen = 0;
    let i = start;
    let segmentStart = start;

    while (i < end) {
        if (freq.get(s[i])! < k) {
            if (i > segmentStart) {
                maxLen = Math.max(maxLen, helper(s, segmentStart, i, k));
            }
            segmentStart = i + 1;
        }
        i++;
    }

    if (segmentStart < end) {
        maxLen = Math.max(maxLen, helper(s, segmentStart, end, k));
    }

    return maxLen;
}