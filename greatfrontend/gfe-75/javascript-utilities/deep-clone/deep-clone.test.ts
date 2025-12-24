import { describe, expect, it } from 'vitest';
import { deepClone } from './deep-clone';

describe('deepClone', () => {
  it('primitive values', () => {
    expect(deepClone('foo')).toEqual('foo');
    expect(deepClone(123)).toEqual(123);
  });

  it('objects', () => {
    const obj = { role: 'foo' };
    const clonedObj = deepClone(obj);
    clonedObj.role = 'bar';
    expect(obj).toEqual({ role: 'foo' });
  });

  it('nested objects', () => {
    const obj = { user: { role: 'admin', id: '123' } };
    const clonedObj = deepClone(obj);
    clonedObj.user.role = 'bar';
    expect(obj).toEqual({ user: { role: 'admin', id: '123' } });
  });
});
