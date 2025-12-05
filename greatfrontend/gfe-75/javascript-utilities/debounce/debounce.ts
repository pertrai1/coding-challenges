export function debounce(fn: Function, delay: number): Function {
  let timeoutId: number | null = null;

  return function (this: any, ...args: any[]) {
    // Clear any existing timer
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Set a new timer
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };
}
