import { describe, it, expect } from 'vitest';
import { findLength } from './maximum-length-of-repeated-subarray';

describe('findLength', () => {
  describe('Basic use cases', () => {
    it('should find repeated subarray in the middle', () => {
      expect(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toBe(3);
    });

    it('should find repeated subarray when entire arrays match', () => {
      expect(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])).toBe(5);
    });

    it('should find repeated subarray at the start', () => {
      expect(findLength([1, 2, 3, 4], [1, 2, 3, 5, 6])).toBe(3);
    });

    it('should find repeated subarray at the end', () => {
      expect(findLength([5, 6, 7, 8], [1, 2, 7, 8])).toBe(2);
    });

    it('should handle arrays with no common subarray', () => {
      expect(findLength([1, 2, 3], [4, 5, 6])).toBe(0);
    });

    it('should handle arrays with only single element match', () => {
      expect(findLength([1, 2, 3], [4, 2, 6])).toBe(1);
    });
  });

  describe('Edge cases', () => {
    it('should handle minimum length arrays with match', () => {
      expect(findLength([1], [1])).toBe(1);
    });

    it('should handle minimum length arrays with no match', () => {
      expect(findLength([1], [2])).toBe(0);
    });

    it('should handle empty first array', () => {
      expect(findLength([], [1, 2, 3])).toBe(0);
    });

    it('should handle empty second array', () => {
      expect(findLength([1, 2, 3], [])).toBe(0);
    });

    it('should handle both arrays empty', () => {
      expect(findLength([], [])).toBe(0);
    });

    it('should handle one array being subset of another', () => {
      expect(findLength([1, 2, 3], [0, 1, 2, 3, 4])).toBe(3);
    });

    it('should handle arrays of different lengths', () => {
      expect(findLength([1, 2, 3, 4, 5, 6, 7], [3, 4, 5])).toBe(3);
    });

    it('should handle multiple non-overlapping matches (return longest)', () => {
      expect(findLength([1, 2, 0, 3, 4, 5], [0, 1, 2, 0, 3, 4, 5])).toBe(6);
    });
  });

  describe('Boundary values', () => {
    it('should handle arrays with all zeros', () => {
      expect(findLength([0, 0, 0], [0, 0, 0, 0])).toBe(3);
    });

    it('should handle arrays with maximum constraint value (100)', () => {
      expect(findLength([100, 99, 98], [100, 99, 98])).toBe(3);
    });

    it('should handle mix of zeros and non-zeros', () => {
      expect(findLength([0, 1, 2, 0], [1, 0, 1, 2, 0])).toBe(4);
    });

    it('should handle alternating pattern', () => {
      expect(findLength([1, 0, 1, 0, 1], [1, 0, 1, 0])).toBe(4);
    });
  });

  describe('Performance considerations', () => {
    it('should handle larger arrays efficiently', () => {
      const arr1 = Array.from({ length: 100 }, (_, i) => i % 10);
      const arr2 = Array.from({ length: 100 }, (_, i) => i % 10);
      expect(findLength(arr1, arr2)).toBe(100);
    });

    it('should handle arrays with no matches efficiently', () => {
      const arr1 = Array.from({ length: 100 }, (_, i) => i);
      const arr2 = Array.from({ length: 100 }, (_, i) => i + 100);
      expect(findLength(arr1, arr2)).toBe(0);
    });
  });

  describe('Duplicate values', () => {
    it('should handle arrays with many duplicate values', () => {
      expect(findLength([1, 1, 1, 2, 2], [1, 1, 2, 2, 2])).toBe(4);
    });

    it('should find correct match with duplicate patterns', () => {
      expect(findLength([1, 2, 1, 2, 3], [1, 2, 3, 1, 2])).toBe(3);
    });
  });
});
