type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  const copy = value.slice();
  const result = [];

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
