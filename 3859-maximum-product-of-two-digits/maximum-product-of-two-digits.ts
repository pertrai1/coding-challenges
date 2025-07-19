function maxProduct(n: number): number {
    const nums: number[] = [];
    while (n > 0) {
        const curr = Math.floor(n % 10);
        nums.push(curr);
        n = Math.floor(n / 10);
    }
    let maxProd = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                maxProd = Math.max(maxProd, nums[i] * nums[j]);
            }
        }
    }
    return maxProd;
};