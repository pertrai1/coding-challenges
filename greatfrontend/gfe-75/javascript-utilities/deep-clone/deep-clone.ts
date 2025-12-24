export function deepClone<T>(value: T): T {
  if (typeof value !== 'object' || value === null) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((val) => deepClone(val)) as T;
  }
  return Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, deepClone(val)])
  ) as T;
}
