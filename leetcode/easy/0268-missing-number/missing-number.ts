export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((acc, curr) => acc + curr, 0);
  return expected - actual;
}
