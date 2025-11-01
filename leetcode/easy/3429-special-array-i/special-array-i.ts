function isArraySpecial(nums: number[]): boolean {
    return nums.every((_, i) => {
        if (i === 0) {
            return true;
        } else {
            return nums[i] % 2 !== nums[i - 1] % 2;
        }
    });
};