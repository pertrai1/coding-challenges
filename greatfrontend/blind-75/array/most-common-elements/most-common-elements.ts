/*
@time - O(n) where n is the length of numbers
@space - O(n) where n is the number of unique numbers in numbers
*/
export function mostCommonElements(numbers: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();

  for (const num of numbers) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const sortedMap = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);
  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    result.push(sortedMap[i][0]);
  }

  return result;
}
