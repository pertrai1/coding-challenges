type ReturnValue<T> = { -readonly [P in keyof T]: Awaited<T[P]> };
export function promiseAll<T extends readonly unknown[] | []>(
  iterable: T
): Promise<ReturnValue<T>> {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      return reject(new TypeError('Argument must be an array'));
    }

    const n = iterable.length;
    if (n === 0) {
      resolve([] as ReturnValue<T>);
      return;
    }

    const result = Array(n);
    let pending = n;
    let rejected = false;

    iterable.forEach((value, index) => {
      Promise.resolve(value)
        .then((val) => {
          if (rejected) return;

          result[index] = val;
          pending--;

          if (pending === 0) {
            resolve(result as ReturnValue<T>);
          }
        })
        .catch((err) => {
          if (!rejected) {
            rejected = true;
            reject(err);
          }
        });
    });
  });
}
