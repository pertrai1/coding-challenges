function findMaxConsecutiveOnes(nums: number[]): number {
    const len = nums.length;
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < len; right++) {
        if (nums[right] !== 1) {
            left = right + 1;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};