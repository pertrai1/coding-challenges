function smallestCommonScroll(
  scrollsA: number[],
  scrollsB: number[],
  scrollsC: number[]
): number {
  let a = 0;
  let b = 0;
  let c = 0;
  const aLength = scrollsA.length - 1;
  const bLength = scrollsB.length - 1;
  const cLength = scrollsC.length - 1;
  while (a <= aLength || b <= bLength || c <= cLength) {
    if (scrollsA[a] === scrollsB[b] && scrollsB[b] === scrollsC[c]) {
      return scrollsA[a];
    }
    if (scrollsA[a] < scrollsB[b]) {
      a++;
    } else if (scrollsB[b] < scrollsC[c]) {
      b++;
    } else {
      c++;
    }
  }
  return -1;
}

smallestCommonScroll([2, 3, 5, 8, 10], [4, 5, 6, 10, 12], [1, 2, 3, 5, 10, 15]); // 5
smallestCommonScroll(
  [2, 3, 5, 8, 10],
  [3, 4, 5, 6, 10, 12],
  [1, 2, 3, 5, 10, 15]
); // 3
smallestCommonScroll([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]);
smallestCommonScroll([1], [1], [1, 2]); // 1
smallestCommonScroll([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]); // -1
smallestCommonScroll([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // 1
smallestCommonScroll(
  [23, 53, 234, 567, 2345],
  [1, 3, 5, 6, 7, 53, 234, 567, 2345],
  [53, 234, 567, 2345, 23456]
); // 53
