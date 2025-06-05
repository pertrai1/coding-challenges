function intersection(nums: number[][]): number[] {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            numMap.set(nums[i][j], (numMap.get(nums[i][j]) || 0) + 1);
        }
    }
    const result = [];
    for (const val of numMap) {
        if (val[1] === nums.length) {
            result.push(val[0]);
        }
    }
    return result.sort((a, b) => a - b);
};