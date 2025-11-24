function smallerNumbersThanCurrent(nums: number[]): number[] {
  const freq = new Array(101).fill(0);
  for (const num of nums) {
    freq[num]++;
  }

  const prefix = new Array(101).fill(0);
  for (let i = 1; i <= 100; i++) {
    prefix[i] = prefix[i - 1] + freq[i - 1];
  }

  return nums.map((num) => prefix[num]);
}
