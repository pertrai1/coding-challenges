/**
 * @time - O(n) where n is the length of nums
 * @space - O(1) because we only have variables that get set constant numbers
 */
function longestOnes(nums: number[], k: number): number {
  const n = nums.length;

  let maxLength = 0;
  let zeroCount = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    // shrink window if we have exceeded allowed flips
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // update answer with current valid window size
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};