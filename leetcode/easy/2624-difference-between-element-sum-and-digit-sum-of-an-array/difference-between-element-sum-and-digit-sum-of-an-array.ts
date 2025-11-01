function differenceOfSum(nums: number[]): number {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    let digitSum = 0;
    for (let num of nums) {
        while (num > 0) {
            digitSum += Math.floor(num % 10);
            num = Math.floor(num / 10);
        } 
    }
    return Math.abs(total - digitSum);
};