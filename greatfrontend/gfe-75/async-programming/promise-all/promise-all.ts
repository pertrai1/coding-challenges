type ReturnValue<T> = { -readonly [P in keyof T]: Awaited<T[P]> };
export function promiseAll<T extends readonly unknown[] | []>(
  iterable: T
): Promise<ReturnValue<T>> {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      return reject(new TypeError('The iterable is not an iterator'));
    }

    const n = iterable.length;
    const result = Array(n);
    let pending = n;

    if (pending === 0) {
      resolve(result as ReturnValue<T>);
      return;
    }

    iterable.forEach(async (value, index) => {
      try {
        const val = await value;
        result[index] = val;
      } catch (err) {
        reject(err);
      }

      pending--;

      if (pending === 0) {
        resolve(result as ReturnValue<T>);
      }
    });
    return result;
  });
}
