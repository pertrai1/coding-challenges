/**
 * @time - O(n) where n is the length of numbers
 * @space - O(n) where n is the length of numbers
 */
export function arrayProductExcluding(numbers: number[]): number[] {
  const n = numbers.length;

  // store the values for previous indexes
  const prefix = new Array(n).fill(1);
  // store the values for the next indexes
  const suffix = new Array(n).fill(1);

  const result = new Array(n).fill(1);

  // iterate and multiply the previous stored value with the previous numbers value
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * numbers[i - 1];
  }

  // iterate and multiply the next stored value with the next numbers value
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * numbers[i + 1];
  }

  // iterate and multiply the previous values with the next values, which won't contain the current value
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
    if (Object.is(result[i], -0)) {
      result[i] = 0;
    }
  }

  return result;
}
