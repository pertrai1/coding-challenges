import { describe, it, expect } from 'vitest';
import { longestCommonSubsequence } from './longest-common-subsequence';

describe('longestCommonSubsequence', () => {
  it('should return 3 for "abcde" and "ace"', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  it('should return 3 for "abc" and "abc"', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
  });

  it('should return 0 for "abc" and "def"', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  it('should return 0 when first string is empty', () => {
    expect(longestCommonSubsequence('', 'abc')).toBe(0);
  });

  it('should return 0 when second string is empty', () => {
    expect(longestCommonSubsequence('abc', '')).toBe(0);
  });

  it('should return 0 when both strings are empty', () => {
    expect(longestCommonSubsequence('', '')).toBe(0);
  });

  it('should return 1 for single matching character', () => {
    expect(longestCommonSubsequence('a', 'a')).toBe(1);
  });

  it('should return 0 for single non-matching characters', () => {
    expect(longestCommonSubsequence('a', 'b')).toBe(0);
  });

  it('should return 4 for "abcdef" and "acbef"', () => {
    expect(longestCommonSubsequence('abcdef', 'acbef')).toBe(4);
  });

  it('should return 2 for "ezupkr" and "ubmrapg"', () => {
    expect(longestCommonSubsequence('ezupkr', 'ubmrapg')).toBe(2);
  });

  it('should handle repeated characters', () => {
    expect(longestCommonSubsequence('aaa', 'aa')).toBe(2);
  });

  it('should handle completely different strings', () => {
    expect(longestCommonSubsequence('xyz', 'abc')).toBe(0);
  });

  it('should handle one string being substring of another', () => {
    expect(longestCommonSubsequence('abcde', 'abc')).toBe(3);
  });

  it('should handle reversed strings with common characters', () => {
    expect(longestCommonSubsequence('abc', 'cba')).toBe(1);
  });

  it('should handle long strings with multiple common subsequences', () => {
    expect(longestCommonSubsequence('aggtab', 'gxtxayb')).toBe(4);
  });
});
