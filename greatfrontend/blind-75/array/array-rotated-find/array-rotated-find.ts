/*
@time: O(log n) where n is the length of the numbers array (binary search)
@space: O(1) because we only use a constant number of variables
*/
export default function findInRotatedArray(
  numbers: number[],
  target: number
): number {
  const n = numbers.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (numbers[mid] === target) {
      return mid;
    }

    // Check if left half is sorted
    if (numbers[low] <= numbers[mid]) {
      if (numbers[low] <= target && target < numbers[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target <= numbers[high] && target > numbers[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}
