# GreatFrontEnd Platform Guide

## Overview

GreatFrontEnd is a platform focused on frontend engineering interview preparation, featuring coding challenges, system design, and JavaScript-specific problems.

## 📁 Repository Structure

```text
greatfrontend/
├── blind-75/          # Curated Blind 75 collection
├── javascript/        # JS-specific challenges
└── react/            # React framework challenges
```

## 📊 Current Progress

- **Blind 75**: 0/75 completed
- **JavaScript**: 0 completed
- **React**: 0 completed

## 🎯 Problem Format

Each problem directory should contain:

- `README.md` - Problem description, examples, constraints
- `solution.js` or `solution.ts` - Main implementation
- `solution.test.js` - Test cases
- Additional files as needed (HTML, CSS for DOM problems)

## 🔗 Resources

- [GreatFrontEnd Platform](https://www.greatfrontend.com/)
- [JavaScript Questions](https://www.greatfrontend.com/questions/javascript)
- [React Questions](https://www.greatfrontend.com/questions/react)
- [Frontend System Design](https://www.greatfrontend.com/system-design)

## 🎨 Focus Areas

### JavaScript Fundamentals

- Closures and scope
- Promises and async/await
- Prototypal inheritance
- Event loop and concurrency
- Module systems

### DOM & Browser APIs

- DOM manipulation
- Event handling
- Fetch API
- LocalStorage/SessionStorage
- Browser performance

### Framework Challenges (React)

- Component patterns
- Hooks implementation
- State management
- Performance optimization
- Custom hooks

### Frontend System Design

- Component architecture
- State management patterns
- API design
- Performance considerations
- Scalability

## 💡 Tips for GreatFrontEnd

1. **Think about browser compatibility** - Consider polyfills and edge cases
2. **Performance matters** - Optimize for real-world usage
3. **Clean APIs** - Design intuitive, reusable interfaces
4. **Error handling** - Handle edge cases gracefully
5. **Modern JavaScript** - Use ES6+ features appropriately

## 🔄 Cross-Platform Learning

Many GreatFrontEnd problems overlap with LeetCode's algorithm challenges but with a frontend twist:

- **Two Sum** → Implement with Set for O(1) lookup
- **Debounce/Throttle** → Classic frontend utility patterns
- **Virtual DOM** → Tree diffing algorithms
- **Event Emitter** → Observer pattern in JavaScript

When applicable, solutions will reference corresponding LeetCode implementations.

## 📝 Solution Guidelines

### Code Style

- Use modern ES6+ syntax (const/let, arrow functions, destructuring)
- Prefer functional approaches where appropriate
- Write clear, self-documenting code
- Add JSDoc comments for complex functions

### Testing

- Include test cases with edge cases
- Test browser-specific behavior if applicable
- Consider async operations and timing

### Performance

- Optimize time complexity for data operations
- Consider memory usage for large datasets
- Profile browser performance for DOM operations

See [CLAUDE.md](../../CLAUDE.md) for detailed code review guidelines.
