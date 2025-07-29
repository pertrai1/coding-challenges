function decompressRLElist(nums: number[]): number[] {
    const length = nums.length;
    const result = [];
    for (let i = 0; i < length; i += 2) {
        const temp = new Array(nums[i]).fill(nums[i + 1]);
        result.push(...temp);
    }
    return result;
};