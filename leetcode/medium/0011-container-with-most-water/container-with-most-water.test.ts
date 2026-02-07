import { describe, it, expect } from 'vitest';
import { maxArea } from './container-with-most-water';

describe('Container With Most Water', () => {
  it('should return 1 for height [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('should return 49 for height [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('should handle all same heights [3,3,3,3]', () => {
    // All heights are 3, widest container is 0 to 3 = width 3, height 3 = area 9
    expect(maxArea([3, 3, 3, 3])).toBe(9);
  });
});
