import { describe, it, expect } from 'vitest';
import { characterReplacement } from './longest-repeating-character-replacement';

describe('Longest Repeating Character Replacement', () => {
  it('should return 4 for "ABAB" with k=2', () => {
    expect(characterReplacement('ABAB', 2)).toBe(4);
  });

  it('should return 4 for "AABABBA" with k=1', () => {
    expect(characterReplacement('AABABBA', 1)).toBe(4);
  });

  it('should return 1 when k=0 and all characters are different', () => {
    expect(characterReplacement('ABCD', 0)).toBe(1);
  });

  it('should return full length when all characters are the same', () => {
    expect(characterReplacement('AAAA', 0)).toBe(4);
  });

  it('should handle single character string', () => {
    expect(characterReplacement('A', 1)).toBe(1);
  });

  it('should return full string length when k is large enough to replace all', () => {
    expect(characterReplacement('ABCDE', 10)).toBe(5);
  });
});
