function rob(nums: number[]): number {
    const length = nums.length;
    // if there is no money, then there is no money to return
    if (length === 0) return 0;
    // if there is only one house, return the money from that house
    if (length === 1) return nums[0];
    // if there are 2 houses, return the max of the money from those 2 houses
    if (length === 2) return Math.max(nums[0], nums[1]);

    // setup an array to pull previous values from
    const dp: number[] = Array(length);
    // store the money from house 1
    dp[0] = nums[0];
    // store the max money from the first 2 houses
    dp[1] = Math.max(nums[0], nums[1]);

    // go to each house after the 2nd house
    for (let i = 2; i < length; i++) {
        // store the max of the current house + the house 2 before or skipping the current house
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    // return the last value which will have the hightest value
    return dp[length - 1];
};