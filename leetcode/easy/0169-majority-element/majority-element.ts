function majorityElement(nums: number[]): number {
    let half = Math.floor(nums.length / 2);
    const numsMap: Map<number, number> = new Map();
    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }
    for (const [key, val] of numsMap) {
        if (val > half) {
            return key
        }
    }
};