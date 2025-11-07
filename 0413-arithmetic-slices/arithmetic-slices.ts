function numberOfArithmeticSlices(nums: number[]): number {
    if (nums.length < 3) {
        return 0;
    }
    let start = 0;
    let total = 0;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i]! - nums[i - 1]! !== nums[i - 1]! - nums[i - 2]!) {
            const length = i - start;
            if (length >= 3) {
                total += ((length - 2) * (length - 1)) / 2;
            }
            start = i - 1;
        }
    }

    const finalLength = nums.length - start;
    if (finalLength >= 3) {
        total += ((finalLength - 2) * (finalLength - 1)) / 2;
    }

    return total;
};