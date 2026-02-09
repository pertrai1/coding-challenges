/**
 *
 * What algorithmic pattern applies to this problem?
 * A. Two pointer pattern that will allow to reduce nested loops that cause O(n2) time
 * What variables will you need to track as you iterate?
 * A. A left pointer, a right pointer, current item in nums, and a results array
 * What property must remain true throughout your algorithm?
 * A. The total must not go below 0 for any of the current values of the variables left, right, current
 *
 * Time and Space complexity
 * @time - O(n2) because of the inner while loop that runs for each element in the sortedArray
 * @space = O(n2) for each array inside of the result array
 */
export function threeSum(nums: number[]): number[][] {
  const sortedArray = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedArray.length; i++) {
    // Skip duplicate values for the fixed element to avoid duplicate triplets
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sortedArray.length - 1;

    while (left < right) {
      const sum = sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (sum === 0) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

threeSum([-4, -1, -1, 0, 1, 2]);
