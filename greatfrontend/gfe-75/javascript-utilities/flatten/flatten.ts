type ArrayValue = any | Array<ArrayValue>;

/*
Complexity
Time: O(n) where n the number of items copied from value
Space: O(n) where n is the length of the copy array
*/
export function flatten(value: Array<ArrayValue>): Array<any> {
  const copy = value.slice();
  const result: any[] = [];

  while (copy.length > 0) {
    const val = copy.shift();
    if (Array.isArray(val)) {
      copy.unshift(...val);
    } else {
      result.push(val);
    }
  }

  return result;
}

// Alternative approach using push/pop and reverse
// Rather than shift/unshift, use push/pop which are O(1) operations
// Trade-off: More efficient but harder to reason about because of the need to reverse
export function flattenReverse(value: Array<ArrayValue>): Array<any> {
  const stack = [...value].reverse();
  const result: any[] = [];

  while (stack.length > 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val.reverse());
    } else {
      result.push(val);
    }
  }

  return result;
}

// Alternative approach using recursion
// Trade-off: More readable but risks stack overflow with extremely deep nesting
export function flattenRecursion(value: Array<ArrayValue>): Array<any> {
  return value.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  });
}

// Alternative approach using built-in .flat(Infinity)
export function flattenBuiltInFlat(value: Array<ArrayValue>): Array<any> {
  return value.flat(Infinity);
}
