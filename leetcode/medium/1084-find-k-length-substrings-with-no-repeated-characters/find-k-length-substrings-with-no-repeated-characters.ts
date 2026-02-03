/**
 * @time - O(n) where n is the length of s
 * @space - O(n) where n is the length of s
 */
export function numKLenSubstrNoRepeats(s: string, k: number): number {
  const n = s.length;

  if (k > n) {
    return 0;
  }

  let count = 0;
  const window = new Map<string, number>();

  // initialize the first window
  for (let i = 0; i < k; i++) {
    window.set(s[i], (window.get(s[i]) || 0) + 1);
  }

  if (window.size === k) {
    count++;
  }

  // slide the window
  for (let i = k; i < n; i++) {
    // add a new character
    window.set(s[i], (window.get(s[i]) || 0) + 1);

    // remove olde character
    const oldChar = s[i - k];
    const oldCount = window.get(oldChar)!;
    if (oldCount === 1) {
      window.delete(oldChar);
    } else {
      window.set(oldChar, oldCount - 1);
    }

    if (window.size === k) {
      count++;
    }
  }

  return count;
}
