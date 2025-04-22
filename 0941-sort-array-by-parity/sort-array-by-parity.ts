function sortArrayByParity(nums: number[]): number[] {
    const evens = nums.filter(val => val % 2 === 0);
    const odds = nums.filter(val => val % 2 === 1);
    return [...evens, ...odds];
};