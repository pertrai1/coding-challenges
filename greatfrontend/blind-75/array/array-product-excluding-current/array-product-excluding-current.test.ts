import { describe, it, expect } from 'vitest';
import { arrayProductExcluding } from './array-product-excluding-current';

describe('arrayProductExcludingCurrent', () => {
  it('should return an array of products excluding the current element', () => {
    expect(arrayProductExcluding([1, 2, 3])).toEqual([6, 3, 2]);
    expect(arrayProductExcluding([2, 0, 3])).toEqual([0, 6, 0]);
    expect(arrayProductExcluding([0, 0, -1, 1])).toEqual([0, 0, 0, 0]);
  });

  it('should convert any elements that are -0 to 0', () => {
    expect(arrayProductExcluding([-0, 2, 3])).toEqual([6, 0, 0]);
  });

  it('should handle all negative numbers', () => {
    expect(arrayProductExcluding([-1, -2, -3])).toEqual([6, 3, 2]);
    expect(arrayProductExcluding([-2, 3, -4])).toEqual([-12, 8, -6]);
  });

  it('should handle multiple zeros correctly', () => {
    expect(arrayProductExcluding([0, 0])).toEqual([0, 0]);
    expect(arrayProductExcluding([1, 0, 3])).toEqual([0, 3, 0]);
    expect(arrayProductExcluding([2, 3, 0])).toEqual([0, 0, 6]);
  });

  it('should handle constraint boundaries', () => {
    expect(arrayProductExcluding([5, 2])).toEqual([2, 5]);
    expect(arrayProductExcluding([10, 10, 10])).toEqual([100, 100, 100]);
    expect(arrayProductExcluding([-10, -10, -10])).toEqual([100, 100, 100]);
    expect(arrayProductExcluding([10, -10])).toEqual([-10, 10]);
  });

  it('should handle arrays with ones', () => {
    expect(arrayProductExcluding([1, 1, 1])).toEqual([1, 1, 1]);
    expect(arrayProductExcluding([1, 2, 1, 3])).toEqual([6, 3, 6, 2]);
  });

  it('should handle negative zero in results', () => {
    // When multiplying negative and zero, result should be 0, not -0
    expect(arrayProductExcluding([-1, 0, 1])).toEqual([0, -1, 0]);
  });
});
