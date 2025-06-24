function getSneakyNumbers(nums: number[]): number[] {
    const frequencyMap = new Map<number, number>();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const result = [];
    for (const [key, value] of frequencyMap) {
        if (value === 2) {
            result.push(key);
        }
    }
    return result;
};