import { describe, it, expect } from 'vitest';
import { lengthOfLIS } from './longest-increasing-subsequence';

describe('Longest Increasing Subsequence', () => {
  it('returns 4 for [10,9,2,5,3,7,101,18] (example 1)', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  it('returns 4 for [0,1,0,3,2,3] (example 2)', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  });

  it('returns 1 when all elements are identical', () => {
    expect(lengthOfLIS([1, 1, 1, 1, 1, 1])).toBe(1);
  });

  it('returns 1 for a single element array', () => {
    expect(lengthOfLIS([42])).toBe(1);
  });
});
