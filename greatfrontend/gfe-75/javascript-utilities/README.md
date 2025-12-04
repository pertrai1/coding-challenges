# JavaScript Utilities

Essential JavaScript utility functions that are commonly asked in frontend interviews. These problems test your understanding of JavaScript fundamentals, closures, higher-order functions, and functional programming concepts.

## 📋 Problems in this Category

### Completed ✅

- [Debounce](./debounce/) - Medium

### To Do 📝

- **Throttle** - Medium - Limit function execution rate
- **Memoize** - Medium - Cache function results
- **Curry** - Medium - Transform multi-argument function
- **Partial** - Medium - Pre-fill function arguments
- **Deep Clone** - Medium - Clone nested objects/arrays
- **Deep Equal** - Medium - Compare nested objects
- **Flatten** - Easy - Flatten nested arrays
- **Get** - Easy - Access nested object properties safely
- **Set** - Medium - Set nested object properties
- **Pick** - Easy - Select object properties
- **Omit** - Easy - Exclude object properties
- **Once** - Easy - Execute function only once
- **Bind** - Medium - Implement Function.prototype.bind
- **Call** - Medium - Implement Function.prototype.call
- **Apply** - Medium - Implement Function.prototype.apply
- **Compose** - Medium - Compose functions right-to-left
- **Pipe** - Medium - Compose functions left-to-right
- **Promisify** - Medium - Convert callback to promise
- **Array.prototype.map** - Easy - Implement map
- **Array.prototype.filter** - Easy - Implement filter

## 🎯 Key Patterns

### Function Transformation

Functions that take a function and return a modified version:

- **debounce/throttle**: Control execution timing
- **memoize**: Cache results for performance
- **curry/partial**: Transform argument handling
- **once**: Restrict execution count

```javascript
// Higher-order function pattern
function transformer(fn, ...config) {
  return function (...args) {
    // Modified behavior
    return fn(...args);
  };
}
```

### Closure Management

Understanding and leveraging closures:

```javascript
function debounce(fn, delay) {
  let timeoutId = null; // Closure variable

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
```

### Object Manipulation

Working with nested objects and arrays:

```javascript
// Deep operations require recursion
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  // Recursive clone logic
}
```

### Polyfills

Implementing native JavaScript methods:

```javascript
// Understanding how built-in methods work
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

## 💡 Common Concepts

### Closures

- Capture and maintain state across function calls
- Essential for debounce, throttle, memoize, once
- Understanding lexical scope

### Higher-Order Functions

- Functions that accept or return functions
- Core to functional programming
- Enable function composition and transformation

### Context Binding (`this`)

- Understanding `this` keyword behavior
- `call`, `apply`, `bind` implementations
- Arrow functions vs regular functions

### Recursion

- Deep operations on nested structures
- Base case and recursive case patterns
- Stack overflow considerations

### Type Checking

- Differentiating primitives vs objects
- Array detection
- null vs undefined handling
- Plain objects vs instances

## 🚨 Common Pitfalls

1. **Memory leaks**: Not clearing timers in debounce/throttle
2. **Context loss**: Forgetting to preserve `this`
3. **Shallow vs deep**: Not handling nested structures
4. **Reference vs value**: Mutating vs copying
5. **Edge cases**: null, undefined, circular references

## 🔍 Interview Tips

1. **Clarify requirements**: Ask about edge cases and constraints
2. **Start simple**: Get basic version working first
3. **Consider `this`**: Always handle function context properly
4. **Memory management**: Clean up timers and references
5. **Type safety**: Handle different input types gracefully
6. **Performance**: Discuss time/space complexity trade-offs

## 📚 Real-World Usage

These utilities are found in popular libraries:

- **Lodash/Underscore**: debounce, throttle, memoize, curry, get, set
- **Ramda**: Functional programming utilities
- **RxJS**: Advanced function composition
- **React**: Custom hooks often use these patterns

## 🧪 Testing Considerations

- Test with various input types
- Verify timing behavior (for debounce/throttle)
- Check memory cleanup
- Test context binding
- Verify deep operations handle cycles
- Edge cases: empty, null, undefined

---

Category progress: 1/20 completed (5%)
