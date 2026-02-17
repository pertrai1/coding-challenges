export function lengthOfLIS(nums: number[]): number {
  const length = nums.length;
  const dp: number[] = new Array(length).fill(1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
