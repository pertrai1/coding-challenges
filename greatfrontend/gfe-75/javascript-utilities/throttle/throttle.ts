type ThrottleFn<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
  func: ThrottleFn<T>,
  wait: number
): ThrottleFn<T> {
  let shouldBeThrottled = false;
  return function (this: any, ...args: T) {
    if (!shouldBeThrottled) {
      func.apply(this, args);
    }
    shouldBeThrottled = true;
    setTimeout(() => {
      shouldBeThrottled = false;
    }, wait);
  };
}
