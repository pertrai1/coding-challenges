import { describe, it, expect } from 'vitest';
import { reverseWords } from './reverse-words-in-a-string-ii';

describe('Reverse Words in a String II', () => {
  it('should handle empty string (no words to reverse)', () => {
    const input: string[] = [];
    reverseWords(input);
    expect(input).toEqual([]);
  });

  it('should reverse two single-character words', () => {
    const input = ['b', ' ', 'a'];
    reverseWords(input);
    expect(input).toEqual(['a', ' ', 'b']);
  });

  it('should reverse multiple multi-character words', () => {
    const input = ['c', 'a', 't', ' ', 'd', 'o', 'g'];
    const expected = ['d', 'o', 'g', ' ', 'c', 'a', 't'];
    reverseWords(input);
    expect(input).toEqual(expected);
  });

  it('should handle single word (no spaces)', () => {
    const input = ['s', 'i', 'n', 'g', 'l', 'e'];
    const expected = ['s', 'i', 'n', 'g', 'l', 'e'];
    reverseWords(input);
    expect(input).toEqual(expected);
  });

  it('should handle more than 2 words', () => {
    const input = ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
    const expected = ['b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e'];
    reverseWords(input);
    expect(input).toEqual(expected);
  });
});
