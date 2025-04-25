function largestUniqueNumber(nums: number[]): number {
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const filtersNumbers = Array.from(frequencyMap).filter(val => val[1] === 1);
    return filtersNumbers.length > 0
        ? filtersNumbers.sort((a, b) => b[0] - a[0])[0][0]
        : -1;
};