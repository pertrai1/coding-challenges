/*
@time is O(n2) because of the nested loop
@space is O(min(m, n)) by using only two rows for DP
*/
export function findLength(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0 || nums2.length === 0) {
    return 0;
  }

  // Ensure nums1 is the smaller array to minimize space usage
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  // Use only two rows instead of full DP table
  let prev = new Array(nums1.length + 1).fill(0);
  let curr = new Array(nums1.length + 1).fill(0);

  // track the max length to be returned
  let maxLength: number = 0;

  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j]) {
        curr[j + 1] = prev[j] + 1;
        maxLength = Math.max(maxLength, curr[j + 1]);
      } else {
        curr[j + 1] = 0; // Reset when elements don't match
      }
    }
    // Swap arrays for next iteration
    [prev, curr] = [curr, prev];
    // Reset current array for next use
    curr.fill(0);
  }

  return maxLength;
}
