function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < nums.length; i += 3) {
        const slice = nums.slice(i, i + 3);
        result.push(slice);
    }
    for (const arr of result) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        if (max - min > k) {
            return [];
        }
    }
    return result;
};