function pivotIndex(nums: number[]): number {
    const n = nums.length;
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        const rightSum = total - nums[i] - leftSum;
        if (rightSum === leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};