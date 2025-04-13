function twoSumLessThanK(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    let currentHighest = -1;
    while (start < end) {
        const sum = nums[start] + nums[end];
        if (sum < k && sum > currentHighest) {
            currentHighest = sum;
        }
        if (sum >= k) {
            end--;
        } else if (sum < k) {
            start++;
        }
    }
    return currentHighest;
};