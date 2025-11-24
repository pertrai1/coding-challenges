/*
Complexity:
Time - O(n) where n is the length of the input array. We iterate through each element once.
Space - O(1) as we modify the array in-place using only constant extra space.
*/
export function removeDuplicates(nums: number[]): number {
  let total = 0;
  for (const num of nums) {
    // allow element if we have fewer than 2 elements or current element differs from the one two positions back
    if (total < 2 || num !== nums[total - 2]) {
      nums[total] = num;
      total++;
    }
  }
  return total;
}
