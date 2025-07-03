function numberOfPoints(nums: number[][]): number { 
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= nums[i][1]; j++) {
      numSet.add(j);
    }
  }
  return numSet.size;
}