function frequencySort(nums: number[]): number[] {
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const sortedMap = Array.from(frequencyMap).sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1]
    });
    const result = [];
    for (let i = 0; i < sortedMap.length; i++) {
        for (let j = 0; j < sortedMap[i][1]; j++) {
            result.push(sortedMap[i][0]);
        }
    }
    return result;
};