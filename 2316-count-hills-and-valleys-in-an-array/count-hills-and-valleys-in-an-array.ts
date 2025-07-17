function countHillValley(nums: number[]): number {
    const compressionArr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== compressionArr[compressionArr.length - 1]) {
            compressionArr.push(nums[i]);
        }
    }
    let total = 0;
    for (let i = 1; i < compressionArr.length - 1; i++) {
        const curr = compressionArr[i];
        if (curr > compressionArr[i - 1] && curr > compressionArr[i + 1]) {
            total++;
        }
        if (curr < compressionArr[i - 1] && curr < compressionArr[i + 1]) {
            total++;
        }
    }
    return total;
};