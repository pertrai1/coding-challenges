# VSCode Debugging Guide for Coding Challenges

This guide will help you run and debug your LeetCode solutions to better understand how algorithms work.

## Quick Start

### 1. Open a Solution File

- Navigate to any `.js` or `.ts` file containing a solution
- For example: `leetcode/easy/0001-two-sum/two-sum-debug.js`

### 2. Set Breakpoints

- Click in the left margin next to any line number to set a breakpoint (red dot appears)
- Set breakpoints at key locations:
  - Start of loops
  - Conditional statements
  - Variable assignments you want to inspect
  - Return statements

### 3. Start Debugging

Press `F5` or click "Run and Debug" in the sidebar, then select:

- **Debug Current TypeScript File** - For `.ts` files (builds first, then debugs)
- **Debug Current JavaScript File** - For `.js` files (instant debugging)
- **Debug with tsx (Fast TypeScript)** - For `.ts` files (faster, no build step needed)

### 4. Debug Controls

- **F5** - Continue/Start debugging
- **F10** - Step over (next line)
- **F11** - Step into (enter function)
- **Shift+F11** - Step out (exit function)
- **Shift+F5** - Stop debugging
- **Ctrl+Shift+F5** - Restart debugging

## Available Debug Configurations

### 1. Debug Current TypeScript File

Best for TypeScript solutions. Compiles your code first, then runs with full source map support.

**When to use:** Debugging any `.ts` file in your workspace

### 2. Debug Current JavaScript File

Best for JavaScript solutions. No compilation needed.

**When to use:** Debugging any `.js` file in your workspace

### 3. Run Current File (No Debug)

Runs the file without stopping at breakpoints. Good for quick testing.

**When to use:** Just want to see output without stepping through

### 4. Debug with tsx (Fast TypeScript)

Fastest option for TypeScript. Uses `tsx` to run TypeScript directly without a build step.

**When to use:** Quick debugging sessions, frequently modified code

## Example Workflow

### Debugging Two Sum

1. Open `leetcode/easy/0001-two-sum/two-sum-debug.js`
2. Set a breakpoint on line 7: `const complement = target - nums[i];`
3. Set another breakpoint on line 9: `return [hashMap.get(complement), i];`
4. Press `F5` and select "Debug Current JavaScript File"
5. The debugger will pause at your first breakpoint
6. Hover over variables to see their values
7. Use the Debug Console to evaluate expressions like `hashMap.size`
8. Press `F10` to step through line by line
9. Watch how the algorithm finds the solution

### Debugging Climbing Stairs (Dynamic Programming)

1. Open `leetcode/easy/0070-climbing-stairs/climbing-stairs-debug.ts`
2. Set a breakpoint inside the for loop: `dp[i] = dp[i - 1] + dp[i - 2];`
3. Press `F5` and select "Debug Current TypeScript File"
4. Watch the `dp` array build up as you step through
5. Observe how each value is computed from previous values

## Debug Panel Features

### Variables Panel

- Shows all variables in current scope
- Expand objects and arrays to see contents
- Right-click to "Add to Watch" for persistent tracking

### Watch Panel

- Add expressions to track across execution
- Examples:
  - `hashMap.size`
  - `dp.slice(0, i+1)` (see DP array progress)
  - `nums[i]`
  - `target - nums[i]`

### Call Stack

- See the chain of function calls
- Click entries to jump to that execution point

### Debug Console

- Evaluate expressions while paused
- Try things like:
  - `nums`
  - `i`
  - `hashMap`
  - `Array.from(hashMap.entries())`

## Creating Debug Files for Your Solutions

When you want to debug a solution, create a `-debug.js` or `-debug.ts` file:

```javascript
// your-solution-debug.js
function yourSolution(param) {
  // Your algorithm code
}

// Test cases
console.log('Test 1:', yourSolution(input1));
console.log('Test 2:', yourSolution(input2));
```

This approach:

- ✅ Keeps original solution clean for LeetCode submission
- ✅ Lets you add multiple test cases
- ✅ Makes it easy to compare results with expected output
- ✅ Allows you to experiment without breaking the original

## Tips for Learning Algorithms

### 1. Watch Variable Changes

Set breakpoints and watch how values change iteration by iteration. This is especially useful for:

- Hash maps building up
- DP arrays filling in
- Pointers moving
- Stacks/queues growing and shrinking

### 2. Step Through Edge Cases

Use the debugger on edge cases:

- Empty arrays
- Single elements
- Maximum constraints
- Negative numbers

### 3. Compare Approaches

Debug different solutions to the same problem side by side to see performance differences.

### 4. Use Conditional Breakpoints

Right-click a breakpoint → "Edit Breakpoint" → Add condition
Example: `i === 5` (only pause when i equals 5)

### 5. Log Points

Right-click breakpoint → "Edit Breakpoint" → "Logpoint"
Logs values without stopping execution
Example: `Current i: {i}, value: {nums[i]}`

## Troubleshooting

### "Cannot find module" Error

Make sure you're in the correct directory. The debug configuration uses `${file}` which runs the currently open file.

### TypeScript Compilation Errors

Run `npm run build` first to see compilation errors. Fix those before debugging.

### Breakpoints Not Hitting

- Ensure source maps are enabled (already configured)
- Rebuild with `npm run build`
- Try "Debug with tsx" configuration instead

### Variables Show "undefined"

The variable may not be in scope yet. Step forward until the variable is declared.

## Next Steps

1. Try debugging `two-sum-debug.js` and `climbing-stairs-debug.ts`
2. Create debug files for other solutions you want to understand
3. Use the Watch panel to track key variables
4. Experiment with different test cases

Happy debugging! 🐛
