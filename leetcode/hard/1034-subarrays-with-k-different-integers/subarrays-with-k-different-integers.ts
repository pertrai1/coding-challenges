/*
Complexity - let n be the length of nums array
Time: O(n) - because the sliding window technique processes each num in the nums array.
Space: O(k) - because the frequency map only stores at most k+1 distinct elements at any time.
*/
export function subarraysWithKDistinct(nums: number[], k: number): number {
  // keep track of the frequency that each num is encountered (only for active window elements)
  const distinctCount: Record<number, number> = {};

  // store the total amount of subarrays that have k distinct elements
  let totalCount = 0;
  // count of subarrays with the current distinct elements
  let currCount = 0;

  // used to control the sliding window
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // increment the current number in the frequency map
    distinctCount[nums[right]] = (distinctCount[nums[right]] || 0) + 1;

    // if the value goes from 0 to 1, that means a new distinct element has been encountered, so decrement k
    if (distinctCount[nums[right]] === 1) {
      k--;
    }

    // if k is less than 0, that means there are more than k distinct elements in the current window
    if (k < 0) {
      // decrement the current element
      distinctCount[nums[left]]--;
      // we are back to having the correct number of distinct elements if the current element is now at 0
      if (distinctCount[nums[left]] === 0) {
        k++;
        delete distinctCount[nums[left]]; // Remove key to maintain O(k) space
      }

      // move the window and reset the count
      left++;
      currCount = 0;
    }

    // there are exactly k number of distinct elements in the window
    if (k === 0) {
      // if the value is greater than 1, that means there are duplicates of the same element
      while (distinctCount[nums[left]] > 1) {
        // reduce that number, slide the window, and update the current count
        distinctCount[nums[left]]--;
        left++;
        currCount++;
      }
      // update the total count
      totalCount += currCount + 1;
    }
  }
  return totalCount;
}
