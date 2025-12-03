export default function isBalancedBrackets(str: string): boolean {
  const bracketMap: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const stack: string[] = [];
  const openBrackets = new Set(['(', '[', '{']);

  for (const val of str) {
    if (bracketMap[val]) {
      if (stack.length === 0) {
        return false;
      }
      const bracket = stack.pop();
      if (bracketMap[val] !== bracket) {
        return false;
      }
    } else if (openBrackets.has(val)) {
      stack.push(val);
    }
  }

  return stack.length === 0;
}
