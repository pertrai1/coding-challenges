function maxSum(nums: number[]): number {
    const groups: Map<number, number[]> = new Map();
    for (const num of nums) {
        const maxDigit = Math.max(...[...String(num)].map(d => +d));
        if (!groups.has(maxDigit)) {
            groups.set(maxDigit, []);
        }
        const group = groups.get(maxDigit)!;
        if (group.length < 2) {
            group.push(num);
            group.sort((a, b) => b - a);
        } else if (num > group[1]) {
            group[1] = num;
            group.sort((a, b) => b - a);
        }
    }

    let maxSum = -1;

    for (const [digit, topNumbers] of groups.entries()) {
        if (topNumbers.length === 2) {
            const sum = topNumbers[0] + topNumbers[1];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};