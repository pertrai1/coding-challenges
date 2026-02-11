import { describe, it, expect } from 'vitest';
import { orangesRotting } from './rotting-oranges';

describe('Rotting Oranges', () => {
  it('should return 0 when there are no oranges at all', () => {
    const grid = [[0, 0]];
    expect(orangesRotting(grid)).toBe(0);
  });

  it('should return 0 when there are only rotten oranges', () => {
    const grid = [[2]];
    expect(orangesRotting(grid)).toBe(0);
  });

  it('should return correct minutes for basic rotting scenario', () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1]
    ];
    expect(orangesRotting(grid)).toBe(4);
  });

  it('should return -1 when impossible to rot all oranges', () => {
    const grid = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1]
    ];
    expect(orangesRotting(grid)).toBe(-1);
  });
});
