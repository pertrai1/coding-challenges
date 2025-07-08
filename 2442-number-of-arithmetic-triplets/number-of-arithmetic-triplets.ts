function arithmeticTriplets(nums: number[], diff: number): number {
    let count = 0;
    const numSet: Set<number> = new Set();
    for (const num of nums) {
        numSet.add(num);
    }
    for (const num of nums) {
        if (numSet.has(num + diff) && numSet.has(num + 2 * diff)) {
            count++;
        }
    }
    return count;
};