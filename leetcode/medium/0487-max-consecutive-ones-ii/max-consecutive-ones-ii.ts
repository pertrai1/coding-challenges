function findMaxConsecutiveOnes(nums: number[]): number {
    const n = nums.length;
    let left = 0;
    let totalZeros = 0;
    let maxLength = 0;
    for (let right = 0; right < n; right++) {
        const curr = nums[right];
        if (curr === 0) {
            totalZeros++;
        }
        while (totalZeros > 1) {
            if (nums[left] === 0) {
                totalZeros--;
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};