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
});
