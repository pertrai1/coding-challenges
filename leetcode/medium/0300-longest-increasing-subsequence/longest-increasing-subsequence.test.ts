import { describe, it, expect } from 'vitest';
import { lengthOfLIS } from './longest-increasing-subsequence';

describe('Longest Increasing Subsequence', () => {
  it('returns 4 for [10,9,2,5,3,7,101,18] (example 1)', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });
});
