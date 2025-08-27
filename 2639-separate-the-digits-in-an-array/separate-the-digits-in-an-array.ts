function separateDigits(nums: number[]): number[] {
    const result: number[] = [];
    for (const num of nums) {
        const splitNums = String(num).split("");
        for (const strNum of splitNums) {
            result.push(+strNum);
        }
    }
    return result;
}