export function reverseWords(s: string[]): void {
  const length = s.length;

  if (length === 0) return;

  // Step 1: Reverse the entire array
  let left = 0;
  let right = length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  // Step 2: Reverse each individual word
  let i = 0;

  while (i < length) {
    while (i < length && s[i] === ' ') {
      i++;
    }

    let start = i;

    while (i < length && s[i] !== ' ') {
      i++;
    }

    let end = i - 1;

    while (start < end) {
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    }
  }
}
