function findMiddleIndex(nums: number[]): number {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;
    let rightTotal = 0;
    for (let i = 0; i < nums.length; i++) {
        rightTotal = total - leftSum - nums[i];
        if (leftSum === rightTotal) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};