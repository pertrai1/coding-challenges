function sortArrayByParityII(nums: number[]): number[] {
    let even = 0;
    let odd = 1;
    const n = nums.length;
    const result = Array.from({ length: n }, () => 0);
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) {
            result[even] = nums[i];
            even += 2;
        } else if (nums[i] % 2 === 1) {
            result[odd] = nums[i];
            odd += 2;
        }
    }
    return result;
};