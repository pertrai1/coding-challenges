// brute-force solution: easy
// function findDuplicate(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === nums[i]) {
//         return nums[i];
//       }
//     }
//   }
// };

// Floyd's Tortoise and Hare cycle detection: medium
function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];
  
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
    
  slow = nums[0];
  
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  
  return slow;
}