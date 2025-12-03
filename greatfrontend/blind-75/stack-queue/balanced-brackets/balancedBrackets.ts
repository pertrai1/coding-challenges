export default function isBalancedBrackets(str: string): boolean {
  const bracketMap: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const stack: string[] = [];

  for (const val of str) {
    if (bracketMap[val] && stack.length > 0) {
      const bracket = stack.pop();
      if (bracketMap[val] !== bracket) {
        return false;
      }
    } else {
      stack.push(val);
    }
  }

  return stack.length === 0;
}
