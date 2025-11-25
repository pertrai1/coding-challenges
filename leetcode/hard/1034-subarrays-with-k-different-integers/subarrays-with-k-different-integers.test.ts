import { describe, it, expect } from 'vitest';
import { subarraysWithKDistinct } from './subarrays-with-k-different-integers';

describe('subarraysWithKDistinct', () => {
  // Basic examples from problem description
  it('should handle example 1: [1,2,1,2,3] with k=2', () => {
    expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)).toBe(7);
  });

  it('should handle example 2: [1,2,1,3,4] with k=3', () => {
    expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)).toBe(3);
  });

  // Edge case: k = 1 (only subarrays with single distinct element)
  it('should handle k=1 with all same elements', () => {
    // [1], [1], [1], [1,1], [1,1,1] = 5 subarrays
    expect(subarraysWithKDistinct([1, 1, 1], 1)).toBe(6);
  });

  it('should handle k=1 with different elements', () => {
    // Only single element subarrays: [1], [2], [3]
    expect(subarraysWithKDistinct([1, 2, 3], 1)).toBe(3);
  });

  // Edge case: k equals array length (testing maximum distinct elements)
  it('should handle k equal to number of distinct elements', () => {
    // Only the full array has all 3 distinct elements
    expect(subarraysWithKDistinct([1, 2, 3], 3)).toBe(1);
  });

  it('should handle k equal to array length with duplicates', () => {
    // [1,2,3], [1,2,3,1], [2,3,1] = 3 subarrays with 3 distinct
    expect(subarraysWithKDistinct([1, 2, 3, 1], 3)).toBe(3);
  });

  // Edge case: single element array
  it('should handle single element array with k=1', () => {
    expect(subarraysWithKDistinct([1], 1)).toBe(1);
  });

  // Edge case: all elements are the same
  it('should handle array with all identical elements and k=1', () => {
    // [2], [2], [2], [2], [2,2], [2,2], [2,2], [2,2], [2,2,2], [2,2,2], [2,2,2], [2,2,2,2], [2,2,2,2], [2,2,2,2,2]
    expect(subarraysWithKDistinct([2, 2, 2, 2, 2], 1)).toBe(15);
  });

  // Test with consecutive duplicates
  it('should handle consecutive duplicates with k=2', () => {
    // Tests the logic for handling duplicates at window boundaries
    expect(subarraysWithKDistinct([1, 1, 2, 2], 2)).toBe(4);
  });

  // Test window shrinking logic (k < 0 condition)
  it('should handle case requiring frequent window shrinking', () => {
    // Forces the k < 0 condition multiple times
    expect(subarraysWithKDistinct([1, 2, 3, 4, 5], 2)).toBe(4);
  });

  // Test the currCount increment logic (distinctCount[nums[left]] > 1)
  it('should handle multiple duplicates at left boundary', () => {
    // [1,1,1,2] with k=2 tests the while loop for duplicates
    expect(subarraysWithKDistinct([1, 1, 1, 2], 2)).toBe(3);
  });

  // Test with larger numbers (within constraints)
  it('should handle larger integer values', () => {
    expect(subarraysWithKDistinct([100, 200, 100, 200], 2)).toBe(6);
  });

  // Test alternating pattern
  it('should handle alternating elements with k=2', () => {
    // [1,2], [2,1], [1,2], [2,1], [1,2,1], [2,1,2], [1,2,1,2], [2,1,2,1], [1,2,1,2,1]
    expect(subarraysWithKDistinct([1, 2, 1, 2, 1], 2)).toBe(10);
  });

  // Test with k = array length (no valid subarrays)
  it('should return 0 when k is greater than distinct elements', () => {
    // Only 2 distinct elements but k=3
    expect(subarraysWithKDistinct([1, 2, 1, 2], 3)).toBe(0);
  });

  // Test array with many duplicates at the end
  it('should handle many duplicates at array end', () => {
    expect(subarraysWithKDistinct([1, 2, 3, 3, 3, 3], 3)).toBe(4);
  });

  // Test with sequential numbers
  it('should handle sequential numbers', () => {
    expect(subarraysWithKDistinct([1, 2, 3, 4], 2)).toBe(3);
  });

  // Test the frequency map cleanup (delete operation)
  it('should properly clean up frequency map', () => {
    // Forces elements to be removed from frequency map
    expect(subarraysWithKDistinct([1, 2, 3, 1, 2, 3], 2)).toBe(5);
  });

  // Test with k=1 and pattern of single occurrences
  it('should handle k=1 with no consecutive duplicates', () => {
    // Each element appears once: only single-element subarrays
    expect(subarraysWithKDistinct([5, 4, 3, 2, 1], 1)).toBe(5);
  });

  // Test maximum window size scenario
  it('should handle array where entire array is valid subarray', () => {
    expect(subarraysWithKDistinct([1, 1, 1, 1], 1)).toBe(10);
  });

  // Test interleaved distinct elements
  it('should handle interleaved pattern with k=3', () => {
    expect(subarraysWithKDistinct([1, 2, 3, 2, 1, 3], 3)).toBe(9);
  });

  // Corner case: minimum array length with k equal to it
  it('should handle two-element array with k=2', () => {
    expect(subarraysWithKDistinct([1, 2], 2)).toBe(1);
  });

  // Test with three consecutive groups of same elements
  it('should handle grouped identical elements', () => {
    // [1,1], [2,2], [3,3] groups
    expect(subarraysWithKDistinct([1, 1, 2, 2, 3, 3], 2)).toBe(8);
  });
});
