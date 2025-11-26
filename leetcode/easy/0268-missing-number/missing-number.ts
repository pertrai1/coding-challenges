/*
@time: O(n) where n is the total numbers in nums
@space: O(1) because the variables are storing constant numbers

possible alternatives:
Sorting: O(n log n) time
Hash Set: O(n) time and O(n) space
XOR trick: O(n) time and O(1) space
*/
export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((acc, curr) => acc + curr, 0);
  return expected - actual;
}
