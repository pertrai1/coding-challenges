function maximumProduct(nums: number[]): number {
    nums.sort((a, b) => b - a);

    const n = nums.length;
    let maxThree = nums[0];
    let minThree = nums[0];

    for (let i = 1; i < 3; i++) {
        maxThree *= nums[i];
    }
    for (let i = n - 1; i > n - 3; i--) {
        minThree *= nums[i];
    }

    return Math.max(maxThree, minThree);
};