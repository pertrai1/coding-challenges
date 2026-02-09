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

  it('should return empty array when no triplets sum to zero', () => {
    const nums = [0, 1, 1];
    const result = threeSum(nums);
    expect(result).toEqual([]);
  });

  it('should handle array of all zeros', () => {
    const nums = [0, 0, 0];
    const result = threeSum(nums);
    expect(result).toEqual([[0, 0, 0]]);
  });

  it('should return empty array for empty input', () => {
    const nums: number[] = [];
    const result = threeSum(nums);
    expect(result).toEqual([]);
  });
});
