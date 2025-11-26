import { describe, it, expect } from 'vitest';
import { missingNumber } from './missing-number';

describe('missingNumber', () => {
  describe('Basic Cases', () => {
    it('should correctly identify the missing number in middle', () => {
      const nums = [3, 0, 1];
      const expected = 2;
      const actual = missingNumber(nums);
      expect(actual).toEqual(expected);
    });

    it('should find missing number in unsorted array', () => {
      const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
      const expected = 8;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should find missing number when array is sorted', () => {
      const nums = [0, 1, 3, 4, 5];
      const expected = 2;
      expect(missingNumber(nums)).toEqual(expected);
    });
  });

  describe('Edge Cases - Missing Number at Boundaries', () => {
    it('should return 0 when 0 is missing', () => {
      const nums = [1, 2, 3];
      const expected = 0;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should return n when n is missing (largest number)', () => {
      const nums = [0, 1];
      const expected = 2;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should return n for larger array when last number is missing', () => {
      const nums = [0, 1, 2, 3, 4, 5, 6];
      const expected = 7;
      expect(missingNumber(nums)).toEqual(expected);
    });
  });

  describe('Minimal Input Cases', () => {
    it('should handle single element array with 0', () => {
      const nums = [0];
      const expected = 1;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should handle single element array with 1', () => {
      const nums = [1];
      const expected = 0;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should handle two element array', () => {
      const nums = [0, 2];
      const expected = 1;
      expect(missingNumber(nums)).toEqual(expected);
    });
  });

  describe('Sequential Arrays', () => {
    it('should find missing number in sequential array missing first', () => {
      const nums = [1, 2, 3, 4, 5];
      const expected = 0;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should find missing number in sequential array missing last', () => {
      const nums = [0, 1, 2, 3, 4];
      const expected = 5;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should find missing number in middle of sequential array', () => {
      const nums = [0, 1, 2, 4, 5, 6];
      const expected = 3;
      expect(missingNumber(nums)).toEqual(expected);
    });
  });

  describe('Larger Arrays', () => {
    it('should handle array with 10 elements', () => {
      const nums = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];
      const expected = 8;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should handle array with 100 elements missing middle number', () => {
      const nums = Array.from({ length: 100 }, (_, i) => (i < 50 ? i : i + 1));
      const expected = 50;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should handle array with 100 elements missing last number', () => {
      const nums = Array.from({ length: 100 }, (_, i) => i);
      const expected = 100;
      expect(missingNumber(nums)).toEqual(expected);
    });
  });

  describe('Shuffled Arrays', () => {
    it('should find missing number in completely shuffled small array', () => {
      const nums = [5, 3, 0, 1, 4, 2, 7, 6];
      const expected = 8;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should find missing number in reverse sorted array', () => {
      const nums = [5, 4, 3, 2, 0];
      const expected = 1;
      expect(missingNumber(nums)).toEqual(expected);
    });

    it('should find missing number when 0 is at end', () => {
      const nums = [1, 2, 3, 4, 5, 0];
      const expected = 6;
      expect(missingNumber(nums)).toEqual(expected);
    });
  });
});
