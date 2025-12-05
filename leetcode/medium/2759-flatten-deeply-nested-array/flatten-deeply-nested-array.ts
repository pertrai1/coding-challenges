type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0) {
    return arr.slice();
  }

  const result: MultiDimensionalArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
};
