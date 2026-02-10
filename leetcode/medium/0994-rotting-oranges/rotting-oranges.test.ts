import { describe, it, expect } from 'vitest';
import { orangesRotting } from './rotting-oranges';

describe('Rotting Oranges', () => {
  it('should return 0 when there are no oranges at all', () => {
    const grid = [[0, 0]];
    expect(orangesRotting(grid)).toBe(0);
  });
});
