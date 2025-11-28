import { describe, it, expect } from 'vitest';
import { intToRoman } from './integer-to-roman';

describe('intToRoman', () => {
  it('should convert a number to roman numeral', () => {
    const num = 3749;
    const expected = 'MMMDCCXLIX';

    const actual = intToRoman(num);

    expect(actual).toBe(expected);
  });
  it('should convert the minimum number', () => {
    const num = 1;
    const expected = 'I';

    const actual = intToRoman(num);

    expect(actual).toBe(expected);
  });
  it('should convert the maximum number', () => {
    const num = 3999;
    const expected = 'MMMCMXCIX';

    const actual = intToRoman(num);

    expect(actual).toBe(expected);
  });

  // Subtractive form tests
  it('should convert 4 using subtractive form IV', () => {
    expect(intToRoman(4)).toBe('IV');
  });
  it('should convert 9 using subtractive form IX', () => {
    expect(intToRoman(9)).toBe('IX');
  });
  it('should convert 40 using subtractive form XL', () => {
    expect(intToRoman(40)).toBe('XL');
  });
  it('should convert 90 using subtractive form XC', () => {
    expect(intToRoman(90)).toBe('XC');
  });
  it('should convert 400 using subtractive form CD', () => {
    expect(intToRoman(400)).toBe('CD');
  });
  it('should convert 900 using subtractive form CM', () => {
    expect(intToRoman(900)).toBe('CM');
  });

  // Repeated symbol tests
  it('should convert 3 with consecutive I symbols', () => {
    expect(intToRoman(3)).toBe('III');
  });
  it('should convert 30 with consecutive X symbols', () => {
    expect(intToRoman(30)).toBe('XXX');
  });
  it('should convert 300 with consecutive C symbols', () => {
    expect(intToRoman(300)).toBe('CCC');
  });
  it('should convert 3000 with consecutive M symbols', () => {
    expect(intToRoman(3000)).toBe('MMM');
  });

  // Single symbol tests
  it('should convert 5 to V', () => {
    expect(intToRoman(5)).toBe('V');
  });
  it('should convert 10 to X', () => {
    expect(intToRoman(10)).toBe('X');
  });
  it('should convert 50 to L', () => {
    expect(intToRoman(50)).toBe('L');
  });
  it('should convert 100 to C', () => {
    expect(intToRoman(100)).toBe('C');
  });
  it('should convert 500 to D', () => {
    expect(intToRoman(500)).toBe('D');
  });
  it('should convert 1000 to M', () => {
    expect(intToRoman(1000)).toBe('M');
  });

  // LeetCode examples and complex combinations
  it('should convert 58 (LeetCode example 2)', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });
  it('should convert 1994 with multiple subtractive forms', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
  it('should convert 2764 with additive and subtractive combinations', () => {
    expect(intToRoman(2764)).toBe('MMDCCLXIV');
  });
});
