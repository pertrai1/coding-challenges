function maximizeSum(nums: number[], k: number): number {
    const max = Math.max(...nums);
    let total = 0;
    for (let i = 0; i < k; i++) {
        total += max + i;
    }
    return total;
};