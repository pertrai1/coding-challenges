/* eslint-disable @typescript-eslint/no-explicit-any */
type ThrottleFn<T extends any[]> = (...args: T) => any;

// Leading edge with timestamp
export default function throttle<T extends any[]>(
  func: ThrottleFn<T>,
  wait: number
): ThrottleFn<T> {
  let lastCallTime = 0;

  return function (this: any, ...args: T) {
    const now = Date.now();
    if (now - lastCallTime >= wait) {
      lastCallTime = now;
      return func.apply(this, args);
    }
  };
}

// Trailing edge
export function throttleTrailingEdge<T extends any[]>(
  func: ThrottleFn<T>,
  wait: number
): ThrottleFn<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: T | undefined;

  return function (this: any, ...args: T) {
    lastArgs = args;
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        if (lastArgs) {
          func.apply(this, lastArgs);
        }
        timeoutId = null;
      }, wait);
    }
  };
}
