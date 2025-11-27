/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let pivotIndex: number = n - 2;

    // find the rightmost index where the num at the pivotIndex is less than the num at the next pivotIndex index
    while (pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex + 1]) {
        pivotIndex--;
    }

    if (pivotIndex >= 0) {
        let j: number = n - 1;
        // move j until j is at the smallest element to the right of the pivotIndex
        while (j > pivotIndex && nums[j] <= nums[pivotIndex]) {
            j--;
        }
        // swap the numbers
        [nums[pivotIndex], nums[j]] = [nums[j], nums[pivotIndex]];
    }

    // if the pivotIndex is less than 0, nums are already in descending order so reverse the nums
    reverse(nums, pivotIndex + 1, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}