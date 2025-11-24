import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './remove-duplicates-from-sorted-array-ii';

describe('removeDuplicates', () => {
  it('should remove duplicates keeping at most 2 of each element', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  it('should handle array with all elements appearing more than twice', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it('should handle array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle array with all same elements', () => {
    const nums = [1, 1, 1, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 1]);
  });

  it('should handle array with exactly two of each element', () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should handle array with single element', () => {
    const nums = [1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('should handle array with two identical elements', () => {
    const nums = [1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 1]);
  });
});
