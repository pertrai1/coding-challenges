function averageValue(nums: number[]): number {
    let sum = 0;
    let counter = 0;

    for (const num of nums) {
        if (num % 2 === 0) {
            if (num % 3 === 0) {
                sum += num;
                counter++;
            }
        }
    }
    if (sum === 0) {
        return 0;
    }

    return Math.floor(sum / counter);
};