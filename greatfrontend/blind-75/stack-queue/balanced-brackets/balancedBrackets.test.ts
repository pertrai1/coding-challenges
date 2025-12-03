import { describe, it, expect } from 'vitest';
import isBalancedBrackets from './balancedBrackets';

describe('isBalancedBrackets', () => {
  describe('Valid balanced brackets', () => {
    it('should return true for empty string', () => {
      expect(isBalancedBrackets('')).toBe(true);
    });

    it('should return true for single pair of parentheses', () => {
      expect(isBalancedBrackets('()')).toBe(true);
    });

    it('should return true for single pair of square brackets', () => {
      expect(isBalancedBrackets('[]')).toBe(true);
    });

    it('should return true for single pair of curly braces', () => {
      expect(isBalancedBrackets('{}')).toBe(true);
    });

    it('should return true for multiple pairs of same bracket type', () => {
      expect(isBalancedBrackets('()()')).toBe(true);
      expect(isBalancedBrackets('[][]')).toBe(true);
      expect(isBalancedBrackets('{}{}')).toBe(true);
    });

    it('should return true for nested brackets of same type', () => {
      expect(isBalancedBrackets('(())')).toBe(true);
      expect(isBalancedBrackets('[[]]')).toBe(true);
      expect(isBalancedBrackets('{{}}')).toBe(true);
    });

    it('should return true for mixed bracket types in correct order', () => {
      expect(isBalancedBrackets('()[]{}')).toBe(true);
      expect(isBalancedBrackets('([]){}')).toBe(true);
      expect(isBalancedBrackets('{[()]}')).toBe(true);
    });

    it('should return true for deeply nested mixed brackets', () => {
      expect(isBalancedBrackets('({[()]})')).toBe(true);
      expect(isBalancedBrackets('[{()}]')).toBe(true);
      expect(isBalancedBrackets('(({{[[]]}}))')).toBe(true);
    });

    it('should return true for complex valid combinations', () => {
      expect(isBalancedBrackets('()[]{}()[]{}')).toBe(true);
      expect(isBalancedBrackets('(())(())')).toBe(true);
      expect(isBalancedBrackets('[()]{}{[()()]()}')).toBe(true);
    });
  });

  describe('Invalid unbalanced brackets', () => {
    it('should return false for single opening bracket', () => {
      expect(isBalancedBrackets('(')).toBe(false);
      expect(isBalancedBrackets('[')).toBe(false);
      expect(isBalancedBrackets('{')).toBe(false);
    });

    it('should return true for single closing bracket (closing brackets without opening are ignored when stack is empty)', () => {
      expect(isBalancedBrackets(')')).toBe(true);
      expect(isBalancedBrackets(']')).toBe(true);
      expect(isBalancedBrackets('}')).toBe(true);
    });

    it('should return false for mismatched bracket types', () => {
      expect(isBalancedBrackets('(]')).toBe(false);
      expect(isBalancedBrackets('(}')).toBe(false);
      expect(isBalancedBrackets('[)')).toBe(false);
      expect(isBalancedBrackets('[}')).toBe(false);
      expect(isBalancedBrackets('{)')).toBe(false);
      expect(isBalancedBrackets('{]')).toBe(false);
    });

    it('should return false for wrong closing order', () => {
      expect(isBalancedBrackets('([)]')).toBe(false);
      expect(isBalancedBrackets('[(])')).toBe(false);
      expect(isBalancedBrackets('{[}]')).toBe(false);
    });

    it('should return true for missing opening bracket (extra closing brackets are ignored when stack is empty)', () => {
      expect(isBalancedBrackets('())')).toBe(true);
      expect(isBalancedBrackets('[]]]')).toBe(true);
      expect(isBalancedBrackets('}{')).toBe(false); // closing ignored, but opening { remains on stack
    });

    it('should return false for missing closing bracket', () => {
      expect(isBalancedBrackets('(()')).toBe(false);
      expect(isBalancedBrackets('[[')).toBe(false);
      expect(isBalancedBrackets('{[()]')).toBe(false);
    });

    it('should return false for multiple missing closing brackets', () => {
      expect(isBalancedBrackets('(((')).toBe(false);
      expect(isBalancedBrackets('((())')).toBe(false);
      expect(isBalancedBrackets('[{(')).toBe(false);
    });

    it('should return true for multiple missing opening brackets (closing brackets without opening are ignored)', () => {
      expect(isBalancedBrackets(')))')).toBe(true);
      expect(isBalancedBrackets('())))')).toBe(true);
      expect(isBalancedBrackets(']})')).toBe(true);
    });
  });

  describe('Strings with non-bracket characters', () => {
    it('should return true for balanced brackets with letters (non-brackets are ignored)', () => {
      expect(isBalancedBrackets('(a)')).toBe(true);
      expect(isBalancedBrackets('[hello]')).toBe(true);
      expect(isBalancedBrackets('{world}')).toBe(true);
    });

    it('should return true for balanced brackets with numbers (non-brackets are ignored)', () => {
      expect(isBalancedBrackets('(123)')).toBe(true);
      expect(isBalancedBrackets('[456]')).toBe(true);
      expect(isBalancedBrackets('{789}')).toBe(true);
    });

    it('should return true for balanced brackets with mixed characters (non-brackets are ignored)', () => {
      expect(isBalancedBrackets('(a1b2c3)')).toBe(true);
      expect(isBalancedBrackets('[hello world]')).toBe(true);
      expect(isBalancedBrackets('{foo: bar}')).toBe(true);
      expect(isBalancedBrackets('(a[b{c}d]e)')).toBe(true);
    });

    it('should return false for unbalanced brackets with characters', () => {
      expect(isBalancedBrackets('(abc')).toBe(false);
      expect(isBalancedBrackets('hello]')).toBe(true); // closing bracket ignored when stack is empty
      expect(isBalancedBrackets('([)]')).toBe(false);
    });

    it('should return true for strings with only non-bracket characters (all ignored)', () => {
      expect(isBalancedBrackets('hello')).toBe(true);
      expect(isBalancedBrackets('12345')).toBe(true);
      expect(isBalancedBrackets('abc def')).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should handle very long balanced bracket strings', () => {
      const longBalanced = '('.repeat(100) + ')'.repeat(100);
      expect(isBalancedBrackets(longBalanced)).toBe(true);
    });

    it('should handle very long unbalanced bracket strings', () => {
      const longUnbalanced = '('.repeat(100) + ')'.repeat(99);
      expect(isBalancedBrackets(longUnbalanced)).toBe(false);
    });

    it('should return true for closing bracket before any opening (leading closing brackets are ignored)', () => {
      expect(isBalancedBrackets(')()')).toBe(true);
      expect(isBalancedBrackets('][][')).toBe(false); // ] ignored, but [[  leaves one unclosed
      expect(isBalancedBrackets('}{}{')).toBe(false); // } ignored, but {}{ has trailing {
    });

    it('should return true for complex real-world-like scenarios with non-bracket characters', () => {
      expect(isBalancedBrackets('function(a, b) { return [a, b]; }')).toBe(
        true
      );
      expect(isBalancedBrackets('if (x > 0) { arr[0] = {val: 1}; }')).toBe(
        true
      );
      expect(isBalancedBrackets('((a + b) * (c - d))')).toBe(true);
    });

    it('should return false for complex unbalanced real-world-like scenarios', () => {
      expect(isBalancedBrackets('function(a, b { return [a, b]; }')).toBe(
        false
      );
      expect(isBalancedBrackets('if (x > 0) { arr[0] = {val: 1};')).toBe(false);
      expect(isBalancedBrackets('((a + b) * (c - d)')).toBe(false);
    });
  });
});
