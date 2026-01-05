/**
 * @time - O(n log n) where n is words
 * @space - O(n) n is each item in the Map
 */
export function topKFrequent(words: string[], k: number): string[] {
  const freqMap = new Map<string, number>();
  for (const word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  const sortedMap = Array.from(freqMap).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(sortedMap[i][0]);
  }

  return result;
}
