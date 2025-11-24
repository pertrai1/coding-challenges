# Testing Guide

This repository uses [Vitest](https://vitest.dev/) for testing JavaScript and TypeScript solutions.

## Overview

Vitest is a blazing-fast unit test framework powered by Vite. It provides a modern testing experience with:

- **Fast execution**: Native ES modules support and smart test caching
- **TypeScript support**: First-class TypeScript support with no configuration
- **Compatible API**: Jest-compatible API for easy test writing
- **UI Mode**: Interactive UI for viewing and debugging tests
- **Coverage reports**: Built-in code coverage with v8

## Running Tests

### Basic Commands

```bash
# Run all tests in watch mode
npm test

# Run tests once (CI mode)
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

### Watch Mode

The default `npm test` command runs Vitest in watch mode, which:

- Automatically re-runs tests when files change
- Only runs tests related to changed files
- Provides an interactive CLI for filtering and debugging

### UI Mode

Vitest UI provides a visual interface for your tests:

```bash
npm run test:ui
```

This opens a web browser with:

- Visual test results and file tree
- Source code viewer with coverage highlighting
- Interactive test filtering
- Detailed error messages and stack traces

## Writing Tests

### Test File Structure

Test files should be placed alongside the code they test with the naming convention:

- `*.test.ts` for TypeScript tests
- `*.test.js` for JavaScript tests
- `*.spec.ts` or `*.spec.js` also work

### Example Test

```typescript
import { describe, it, expect } from 'vitest';
import { functionToTest } from './module';

describe('functionToTest', () => {
  it('should handle basic case', () => {
    const result = functionToTest(input);
    expect(result).toBe(expectedOutput);
  });

  it('should handle edge case', () => {
    const result = functionToTest(edgeInput);
    expect(result).toBe(expectedOutput);
  });
});
```

### Testing LeetCode Solutions

For LeetCode problems with linked lists or tree structures:

1. **Export the data structures**: Make sure classes like `ListNode` or `TreeNode` are exported
2. **Create helper functions**: Build helper functions to create test data structures from arrays
3. **Test all examples**: Include all examples from the problem description
4. **Add edge cases**: Test boundary conditions and edge cases

Example from `0002-add-two-numbers`:

```typescript
import { describe, it, expect } from 'vitest';
import { addTwoNumbers, ListNode } from './add-two-numbers';

// Helper to create linked list from array
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

describe('addTwoNumbers', () => {
  it('should add two numbers correctly', () => {
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    // Add assertions
  });
});
```

## Configuration

The Vitest configuration is in `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,ts}'],
    exclude: [
      'node_modules',
      'dist',
      'blog',
      'load-balancer',
      'netcat',
      'notion'
    ]
  }
});
```

### Key Configuration Options

- **globals**: Enables global test APIs (`describe`, `it`, `expect`) without imports
- **environment**: Sets the test environment (`node`, `jsdom`, etc.)
- **include**: Glob patterns for test files
- **exclude**: Directories to exclude from testing

## Code Coverage

Generate coverage reports to see how much of your code is tested:

```bash
npm run test:coverage
```

This creates:

- Terminal output with coverage summary
- HTML report in `coverage/` directory
- JSON report for CI/CD integration

Coverage reports show:

- **Statements**: Percentage of code statements executed
- **Branches**: Percentage of conditional branches taken
- **Functions**: Percentage of functions called
- **Lines**: Percentage of code lines executed

## CI/CD Integration

Tests run automatically on pull requests via GitHub Actions. The workflow:

1. Checks out the code
2. Installs dependencies
3. Runs `npm run test:run`
4. Reports results as PR status check

Tests only run when code files (`.js`, `.ts`) are changed, not for documentation-only PRs.

## Best Practices

### 1. Test-Driven Development

Consider writing tests before implementing solutions:

- Read the problem carefully
- Write test cases based on examples
- Implement the solution
- Verify all tests pass

### 2. Comprehensive Test Cases

Include tests for:

- **Example cases**: From the problem description
- **Edge cases**: Empty inputs, single elements, maximum constraints
- **Boundary conditions**: Min/max values, array bounds
- **Error cases**: Invalid inputs, null/undefined values

### 3. Clear Test Descriptions

Use descriptive test names:

```typescript
// Good ✓
it('should return empty array when input is empty', () => {});
it('should handle single element array', () => {});

// Avoid ✗
it('test 1', () => {});
it('works', () => {});
```

### 4. Keep Tests Fast

- Avoid unnecessary setup/teardown
- Mock expensive operations
- Use focused tests (`it.only`) during development, but remove before committing

### 5. Organize Tests Logically

Group related tests with `describe` blocks:

```typescript
describe('LinkedList operations', () => {
  describe('insertion', () => {
    it('should insert at head', () => {});
    it('should insert at tail', () => {});
  });

  describe('deletion', () => {
    it('should delete from head', () => {});
    it('should delete from tail', () => {});
  });
});
```

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors in tests:

1. Ensure `tsconfig.json` includes test files
2. Check that types are properly exported from solution files
3. Run `npm install` to ensure all dependencies are installed

### Tests Not Running

If tests aren't being detected:

1. Verify file naming (`*.test.ts` or `*.spec.ts`)
2. Check the `include` pattern in `vitest.config.ts`
3. Ensure files aren't in excluded directories

### Import Errors

For ES module import errors:

1. Verify `"type": "module"` is in `package.json`
2. Use `.js` extension in imports for JavaScript files
3. Check that exported functions/classes are using `export` keyword

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vitest API Reference](https://vitest.dev/api/)
- [Vitest Configuration](https://vitest.dev/config/)
- [Testing Best Practices](https://vitest.dev/guide/features.html)

## Examples

Check out the test file for `0002-add-two-numbers` for a complete example:

```
leetcode/medium/0002-add-two-numbers/add-two-numbers.test.ts
```

This demonstrates:

- Importing test utilities and solution
- Creating helper functions for test data
- Writing multiple test cases
- Testing edge cases and boundary conditions
