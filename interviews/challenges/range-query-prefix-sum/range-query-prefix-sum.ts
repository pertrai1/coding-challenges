/*
Complexity:
@time: the time complexity is O(n + p) where n is the length of views array and p is the length of the periods array. Because each array is traversed, that makes the time O(n + p).
@space: the space complexity would be O(n + p) where n is the length of the results array and p is the length of the sums array
*/
export function rangeQueryPrefixSum(
  views: number[],
  periods: number[][]
): number[] {
  const results = new Array(periods.length).fill(0);

  const sums: number[] = [];
  sums[0] = views[0];
  for (let i = 1; i < views.length; i++) {
    sums[i] = views[i] + sums[i - 1];
  }
  for (let i = 0; i < periods.length; i++) {
    const l = periods[i][0];
    const r = periods[i][1];
    if (l === 0) {
      results[i] = sums[r];
    } else {
      results[i] = sums[r] - sums[l - 1];
    }
  }
  return results;
}
