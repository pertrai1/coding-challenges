import { describe, it, expect } from 'vitest';
import flatten from './flatten';

describe('flatten', () => {
  it('empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('nested array', () => {
    expect(flatten([1, [2]])).toEqual([1, 2]);
  });

  it('multiple levels of nesting', () => {
    expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
  });

  it('single-level array (already flat)', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('deeply nested arrays', () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('multiple nested arrays at same level', () => {
    expect(
      flatten([
        [1, 2],
        [3, 4]
      ])
    ).toEqual([1, 2, 3, 4]);
  });

  it('mixed nested and non-nested elements', () => {
    expect(flatten([1, [2, 3], 4, [5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('array with empty nested arrays', () => {
    expect(flatten([1, [], 2, [[]], 3])).toEqual([1, 2, 3]);
  });

  it('array containing only nested empty arrays', () => {
    expect(flatten([[], [[]], [[[]]]])).toEqual([]);
  });

  it('array with different data types', () => {
    expect(flatten([1, ['a', 'b'], true, [null, undefined]])).toEqual([
      1,
      'a',
      'b',
      true,
      null,
      undefined
    ]);
  });

  it('array with objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(flatten([obj1, [obj2]])).toEqual([obj1, obj2]);
  });

  it('array with strings', () => {
    expect(flatten(['hello', ['world', ['!']]])).toEqual([
      'hello',
      'world',
      '!'
    ]);
  });

  it('array with boolean values', () => {
    expect(flatten([true, [false, [true]]])).toEqual([true, false, true]);
  });

  it('array with null and undefined', () => {
    expect(flatten([null, [undefined, [null]]])).toEqual([
      null,
      undefined,
      null
    ]);
  });

  it('array with zeros and negative numbers', () => {
    expect(flatten([0, [-1, [0, [-2]]]])).toEqual([0, -1, 0, -2]);
  });

  it('array with mixed nesting patterns', () => {
    expect(flatten([[[1]], [2], 3, [[[[4]]]]])).toEqual([1, 2, 3, 4]);
  });

  it('large deeply nested array', () => {
    expect(flatten([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
  });

  it('array with functions', () => {
    const fn1 = () => 1;
    const fn2 = () => 2;
    expect(flatten([fn1, [fn2]])).toEqual([fn1, fn2]);
  });

  it('preserves order of elements', () => {
    expect(flatten([5, [4, [3, [2, [1]]]], 6])).toEqual([5, 4, 3, 2, 1, 6]);
  });

  it('array with NaN', () => {
    const result = flatten([NaN, [NaN]]);
    expect(result.length).toBe(2);
    expect(Number.isNaN(result[0])).toBe(true);
    expect(Number.isNaN(result[1])).toBe(true);
  });

  it('does not mutate the original array', () => {
    const original = [1, [2, [3]]];
    const originalCopy = JSON.parse(JSON.stringify(original));
    flatten(original);
    expect(original).toEqual(originalCopy);
  });
});
