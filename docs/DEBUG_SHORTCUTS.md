# VSCode Debugging Quick Reference

## 🚀 Quick Start

1. Open any `-debug.js` or `-debug.ts` file
2. Click left margin to set breakpoint (red dot)
3. Press `F5` to start debugging
4. Use `F10` to step through code

## ⌨️ Keyboard Shortcuts

| Key             | Action                     |
| --------------- | -------------------------- |
| `F5`            | Start/Continue             |
| `F9`            | Toggle breakpoint          |
| `F10`           | Step over (next line)      |
| `F11`           | Step into (enter function) |
| `Shift+F11`     | Step out (exit function)   |
| `Shift+F5`      | Stop debugging             |
| `Ctrl+Shift+F5` | Restart                    |

## 🎯 What to Watch

### Hash Map Problems (Two Sum, etc.)

- Watch: `hashMap.size`, `hashMap.entries()`
- Breakpoint: Inside the loop where you check/add to map

### Dynamic Programming (Climbing Stairs, etc.)

- Watch: `dp` array, current index `i`
- Breakpoint: Inside loop where DP values are calculated
- Tip: Use `dp.slice(0, i+1)` in Watch to see progress

### Greedy Algorithms (Stock Prices, etc.)

- Watch: Running min/max variables
- Breakpoint: Where comparisons happen
- Tip: Add expressions like `price - minPrice` to Watch

### Two Pointers

- Watch: Both pointer variables, elements at pointers
- Breakpoint: Where pointers move
- Tip: Watch `array.slice(left, right+1)` to see current window

## 🔍 Debug Panel Tips

### Variables

- Expand arrays/objects with `>`
- Right-click → "Copy Value"
- Right-click → "Add to Watch"

### Watch Expressions

Add these common expressions:

- `Array.from(map.entries())` - See all map contents
- `array.slice(start, end)` - See current subarray
- `JSON.stringify(object)` - See object as string

### Debug Console

While paused, type expressions:

- Variable names: `nums`, `i`, `target`
- Method calls: `hashMap.get(key)`
- Calculations: `target - nums[i]`

## 💡 Pro Tips

### Conditional Breakpoints

Right-click breakpoint → Edit → Add condition

- `i === 5` - Only pause when i is 5
- `nums[i] < 0` - Pause on negative numbers
- `hashMap.size > 3` - Pause when map gets large

### Logpoints

Right-click → Edit → Logpoint

- `i: {i}, value: {nums[i]}` - Log without stopping
- Great for loops with many iterations

### Multiple Breakpoints

- Set breakpoints at different algorithm stages
- Use `F5` (continue) to jump between them
- Good for comparing different iterations

## 📁 Example Files to Try

1. `two-sum-debug.js` - Hash map pattern
2. `climbing-stairs-debug.ts` - Dynamic programming
3. `best-time-to-buy-and-sell-stock-debug.ts` - Greedy algorithm

## 🐛 Common Issues

**Breakpoint not hitting?**

- File must be open and active
- For TS: Try "Debug with tsx" config

**Can't see variable values?**

- Variable might not be in scope yet
- Step forward until it's declared

**"Cannot find module"?**

- Make sure file is saved
- Try restarting debug session

## 🎓 Learning Strategy

1. **First run**: Step through entire algorithm to see flow
2. **Second run**: Focus on how key variables change
3. **Third run**: Try different test cases
4. **Fourth run**: Modify code and see what breaks

Set Watch expressions before starting - you'll learn faster!
