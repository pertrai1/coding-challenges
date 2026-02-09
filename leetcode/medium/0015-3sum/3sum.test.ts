import { describe, it, expect } from 'vitest';
import { threeSum } from './3sum';

describe('3Sum', () => {
  it('should find all triplets that sum to zero for basic case', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    expect(result).toEqual([
      [-1, -1, 2],
      [-1, 0, 1]
    ]);
  });
});
