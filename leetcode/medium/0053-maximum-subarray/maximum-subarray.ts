function maxSubArray(nums: number[]): number {
    let currentSum = 0;
    let maxSum = -Infinity;

    for (const num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};