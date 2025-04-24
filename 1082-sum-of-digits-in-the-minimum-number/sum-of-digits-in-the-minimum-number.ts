function sumOfDigits(nums: number[]): number {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    for (const num of nums) {
        smallestNumber = Math.min(smallestNumber, num);
    }
    let total = 0;
    let num = smallestNumber;
    while (num > 0) {
        const current = Math.floor(num % 10);
        total += current;
        num = Math.floor(num / 10);
    }
    return total % 2 === 0 ? 1 : 0;
};