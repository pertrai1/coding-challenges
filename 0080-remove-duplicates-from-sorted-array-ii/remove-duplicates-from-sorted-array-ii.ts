function removeDuplicates(nums: number[]): number {
    let total = 0;
    for (const num of nums) {
        // allow element if we have fewer than 2 elements or current element differs from the one two positions back
        if (total < 2 || num !== nums[total - 2]) {
            nums[total] = num;
            total++;
        }
    }
    return total;
};