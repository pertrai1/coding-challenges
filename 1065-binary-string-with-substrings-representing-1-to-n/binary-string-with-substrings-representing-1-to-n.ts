function queryString(s: string, n: number): boolean {
  for (let i = 1; i <= n; i++) {
    const str = i.toString(2);
    if (!s.includes(str)) {
      return false;
    }
  } 
  return true;
};