function shuffle(nums: number[], n: number): number[] {
    const result = new Array(nums.length).fill(0);
    let index = 0;

    for (let i = 0; i < n; i++) {
        result[index] = nums[i];
        index++;
        result[index] = nums[i + n];
        index++;
    }

    return result;
};