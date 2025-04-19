function uniqueOccurrences(arr: number[]): boolean {
    if (arr.length < 2) return true;

    const frequencyMap = new Map();
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const uniqueSet = new Set();
    for (const [key, val] of frequencyMap) {
        uniqueSet.add(val);
    }

    return uniqueSet.size === frequencyMap.size;
};