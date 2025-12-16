/**
 * Throttle a function so that it can only be called once per wait period.
 * @time O(1) for each call
 * @space O(1) for the closure variables
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
type ThrottleFn<T extends any[]> = (...args: T) => any;

function validateFunc<T extends any[]>(fn: ThrottleFn<T>): void {
  if (typeof fn !== 'function') {
    throw new TypeError('First argument must be a function');
  }
}

function validateWait(wait: number): void {
  if (typeof wait !== 'number' || wait < 0 || !Number.isFinite(wait)) {
    throw new TypeError('Wait must be a non-negative finite number');
  }
}

// Leading edge with timestamp
export function throttle<T extends any[]>(
  func: ThrottleFn<T>,
  wait: number
): ThrottleFn<T> {
  validateFunc(func);
  validateWait(wait);

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
  validateFunc(func);
  validateWait(wait);

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
