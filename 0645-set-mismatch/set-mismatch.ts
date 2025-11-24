function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  const count: number[] = Array(n + 1).fill(0);
  let duplicate = -1;
  
  for (const num of nums) {
    actualSum += num;
    count[num] = (count[num] || 0) + 1;
    if (count[num] > 1) {
      duplicate = num;
    }
  }

  const missing =  expectedSum - (actualSum - duplicate);
  
  return [duplicate, missing];
};