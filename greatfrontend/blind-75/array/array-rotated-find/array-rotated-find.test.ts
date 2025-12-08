import { describe, it, expect } from 'vitest';
import findInRotatedArray from './array-rotated-find';

describe('findInRotatedArray', () => {
  it('should find in an ascending array', () => {
    expect(findInRotatedArray([0, 1, 2, 3, 4], 2)).toStrictEqual(2);
  });

  it('should find target after rotation point', () => {
    expect(findInRotatedArray([2, 3, 4, 0, 1], 0)).toStrictEqual(3);
  });

  it('should return -1 if target not found in array', () => {
    expect(findInRotatedArray([4], 2)).toStrictEqual(-1);
  });

  it('should return -1 with no items in array', () => {
    expect(findInRotatedArray([], 0)).toStrictEqual(-1);
  });

  it('should find target at the rotation point', () => {
    expect(findInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)).toStrictEqual(4);
  });

  it('should find target at the first index', () => {
    expect(findInRotatedArray([5, 6, 7, 0, 1, 2, 3], 5)).toStrictEqual(0);
  });

  it('should find target at the last index', () => {
    expect(findInRotatedArray([5, 6, 7, 0, 1, 2, 3], 3)).toStrictEqual(6);
  });

  it('should find in array rotated near the end', () => {
    expect(
      findInRotatedArray([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 2)
    ).toStrictEqual(5);
  });

  it('should find in array rotated near the beginning', () => {
    expect(findInRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)).toStrictEqual(5);
  });

  it('should handle two-element rotated array - find second element', () => {
    expect(findInRotatedArray([2, 1], 1)).toStrictEqual(1);
  });

  it('should handle two-element rotated array - find first element', () => {
    expect(findInRotatedArray([2, 1], 2)).toStrictEqual(0);
  });

  it('should find target in left sorted portion', () => {
    expect(findInRotatedArray([4, 5, 6, 7, 0, 1, 2], 5)).toStrictEqual(1);
  });

  it('should find target in right sorted portion', () => {
    expect(findInRotatedArray([4, 5, 6, 7, 0, 1, 2], 1)).toStrictEqual(5);
  });

  it('should handle arrays with negative numbers - unrotated', () => {
    expect(findInRotatedArray([-5, -3, -1, 0, 1, 3, 5], -1)).toStrictEqual(2);
  });

  it('should handle arrays with negative numbers - rotated', () => {
    expect(findInRotatedArray([3, 5, -5, -3, -1, 0, 1], -3)).toStrictEqual(3);
  });
});
