import { describe, it, expect } from 'vitest';
import { rangeQueryPrefixSum } from './range-query-prefix-sum';

// eslint-disable-next-line max-lines-per-function
describe('rangeQueryPrefixSum', () => {
  describe('basic cases', () => {
    it('should return correct sum for a single range query', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [[1, 3]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([9]); // 2 + 3 + 4 = 9
    });

    it('should return correct sums for multiple range queries', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [
        [0, 2],
        [1, 4],
        [2, 3]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([6, 14, 7]); // 1+2+3, 2+3+4+5, 3+4
    });

    it('should handle range starting from index 0', () => {
      const views = [10, 20, 30, 40];
      const periods = [[0, 3]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([100]); // 10+20+30+40
    });

    it('should handle range ending at last index', () => {
      const views = [5, 10, 15, 20];
      const periods = [[2, 3]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([35]); // 15+20
    });
  });

  describe('edge cases', () => {
    it('should handle single element array with range [0, 0]', () => {
      const views = [42];
      const periods = [[0, 0]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([42]);
    });

    it('should handle query for single element (l === r)', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [[2, 2]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([3]);
    });

    it('should handle entire array as range', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [[0, 4]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([15]); // 1+2+3+4+5
    });

    it('should handle empty periods array', () => {
      const views = [1, 2, 3];
      const periods: number[][] = [];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([]);
    });

    it('should handle two-element array', () => {
      const views = [100, 200];
      const periods = [
        [0, 0],
        [1, 1],
        [0, 1]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([100, 200, 300]);
    });
  });

  describe('special values', () => {
    it('should handle array with all zeros', () => {
      const views = [0, 0, 0, 0];
      const periods = [
        [0, 3],
        [1, 2]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([0, 0]);
    });

    it('should handle array with negative numbers', () => {
      const views = [-1, -2, -3, -4];
      const periods = [
        [0, 3],
        [1, 2]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([-10, -5]); // -1-2-3-4, -2-3
    });

    it('should handle array with mixed positive and negative numbers', () => {
      const views = [5, -3, 2, -1, 4];
      const periods = [
        [0, 4],
        [1, 3]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([7, -2]); // 5-3+2-1+4, -3+2-1
    });

    it('should handle large numbers', () => {
      const views = [1000000, 2000000, 3000000];
      const periods = [[0, 2]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([6000000]);
    });

    it('should handle array with identical values', () => {
      const views = [5, 5, 5, 5, 5];
      const periods = [
        [0, 4],
        [2, 4],
        [0, 0]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([25, 15, 5]);
    });
  });

  describe('overlapping and repeated queries', () => {
    it('should handle overlapping ranges', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [
        [0, 2],
        [1, 3],
        [2, 4]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([6, 9, 12]); // 1+2+3, 2+3+4, 3+4+5
    });

    it('should handle duplicate queries', () => {
      const views = [1, 2, 3];
      const periods = [
        [0, 2],
        [0, 2],
        [0, 2]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([6, 6, 6]);
    });

    it('should handle nested ranges', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [
        [0, 4],
        [1, 3],
        [2, 2]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([15, 9, 3]); // entire, middle, single
    });
  });

  describe('boundary conditions', () => {
    it('should handle first and last single element queries', () => {
      const views = [10, 20, 30, 40, 50];
      const periods = [
        [0, 0],
        [4, 4]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([10, 50]);
    });

    it('should handle adjacent non-overlapping ranges', () => {
      const views = [1, 2, 3, 4, 5, 6];
      const periods = [
        [0, 2],
        [3, 5]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([6, 15]); // 1+2+3, 4+5+6
    });

    it('should handle range of length 2 at start', () => {
      const views = [7, 8, 9, 10];
      const periods = [[0, 1]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([15]); // 7+8
    });

    it('should handle range of length 2 at end', () => {
      const views = [7, 8, 9, 10];
      const periods = [[2, 3]];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([19]); // 9+10
    });
  });

  describe('larger inputs', () => {
    it('should handle larger array with multiple queries', () => {
      const views = Array.from({ length: 100 }, (_, i) => i + 1); // [1, 2, 3, ..., 100]
      const periods = [
        [0, 99], // sum of 1 to 100 = 5050
        [0, 49], // sum of 1 to 50 = 1275
        [50, 99] // sum of 51 to 100 = 3775
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([5050, 1275, 3775]);
    });

    it('should handle many queries on same array', () => {
      const views = [1, 2, 3, 4, 5];
      const periods = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 2]
      ];
      expect(rangeQueryPrefixSum(views, periods)).toEqual([
        1, 3, 6, 10, 15, 2, 5, 9, 14, 3
      ]);
    });
  });
});
