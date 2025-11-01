/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    backtrack(0, [], nums);
    return res;

    function backtrack(i, subset, nums) {
        res.push([...subset]);
        for (let j = i; j < nums.length; j++) {
            if (j > i && nums[j] === nums[j - 1]) {
                continue;
            }
            subset.push(nums[j]);
            backtrack(j + 1, subset, nums);
            subset.pop();
        }
    }
};