import { describe, it, expect } from 'vitest';
import { coinChange } from './coin-change';

describe('Coin Change', () => {
  it('should return 0 when amount is 0', () => {
    expect(coinChange([1], 0)).toBe(0);
  });
});
