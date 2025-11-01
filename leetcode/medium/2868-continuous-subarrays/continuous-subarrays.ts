// Using monotonic dequeu
// Time = O(n)
// Space = O(n)
function continuousSubarrays(nums: number[]): number {
  const n = nums.length;
  const maxDeque: number[] = [];
  const minDeque: number[] = [];
  
  let left = 0;
  let count = 0;

  for (let right = 0; right < n; right++) {
    // maintain maxDeque
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);
    
    // maintain minDeque
    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
      minDeque.pop();
    }
    minDeque.push(right);
   
    // shrink window is max - min > 2
    while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
      if (maxDeque[0] === left) maxDeque.shift();
      if (minDeque[0] === left) minDeque.shift();
      left++;
    }
  
    // count valid subarrays ending at right
    count += right - left + 1;
  }
  
  return count;
};


// Using sorted map
// Time = O(n)
// Space = O(1) - the size of the window won't be greater than 2 and max elements in map 3.
/**function continuousSubarrays(nums: number[]): number {
  const freqMap: Map<number, number> = new Map();
  const length = nums.length;
  let left = 0;
  let right = 0;
  let count = 0;

  // O(n) looping through each time in the array
  while (right < length) {
    freqMap.set(nums[right], (freqMap.get(nums[right]) ?? 0) + 1);
    
    // Keep in mind that Array.from creates a new array each time, even though the array is small
    let maxNum = Math.max(...Array.from(freqMap.keys()));
    let minNum = Math.min(...Array.from(freqMap.keys()));
    
    // Because the size of the map won't be greater than 3, it is constant
    while (maxNum - minNum > 2) {
      freqMap.set(nums[left], (freqMap.get(nums[left]) ?? 0) - 1);
      if (freqMap.get(nums[left]) === 0) {
        freqMap.delete(nums[left]);
      }
      left += 1;
      
      if (freqMap.size > 0) {
        maxNum = Math.max(...Array.from(freqMap.keys()));
        minNum = Math.min(...Array.from(freqMap.keys()));
      }
    }
    
    count += right - left + 1;
    right += 1;
  }
  
  return count;
};
*/