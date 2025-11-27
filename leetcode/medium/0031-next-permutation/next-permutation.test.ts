import { describe, it, expect } from 'vitest';
import { nextPermutation } from './next-permutation';

describe('nextPermutation', () => {
  it('should return same array for single element', () => {
    const arr = [1];
    const expected = [1];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should find next permutation when pivot exists in middle', () => {
    const arr = [1, 3, 2];
    const expected = [2, 1, 3];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should swap last two elements for ascending sequence', () => {
    const arr = [1, 2, 3];
    const expected = [1, 3, 2];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should correctly handle arrays with duplication values', () => {
    const arr = [1, 2, 2, 3];
    const expected = [1, 2, 3, 2];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should wrap around to the smallest permutation', () => {
    const arr = [3, 2, 1];
    const expected = [1, 2, 3];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should handle two-element array', () => {
    const arr = [1, 2];
    const expected = [2, 1];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should handle all the elements being the same', () => {
    const arr = [1, 1, 1];
    const expected = [1, 1, 1];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should handle larger array with complex suffix', () => {
    const arr = [1, 5, 8, 4, 7, 6, 5, 3, 1];
    const expected = [1, 5, 8, 5, 1, 3, 4, 6, 7];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should handle the pivot being at the very beginning', () => {
    const arr = [1, 5, 4, 3, 2];
    const expected = [2, 1, 3, 4, 5];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
  it('should handle array with zeros', () => {
    const arr = [0, 1, 2];
    const expected = [0, 2, 1];

    nextPermutation(arr);

    expect(arr).toEqual(expected);
  });
});
