function findMaxAverage(nums: number[], k: number): number {
    if (nums.length === 1) {
        return nums[0];
    }
    const n = nums.length;
    let windowSum = 0;

    for (let i = 0; i < k; ++i) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;
    for (let i = k; i < n; ++i) {
        windowSum = windowSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum / k;
};