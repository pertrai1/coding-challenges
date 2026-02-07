import { describe, it, expect } from 'vitest';
import { maxArea } from './container-with-most-water';

describe('Container With Most Water', () => {
  it('should return 1 for height [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('should return 49 for height [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
