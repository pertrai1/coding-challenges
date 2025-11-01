const addBoldTag = (s: string, words: string[]): string => {
  const boldChars: boolean[] = Array(s.length).fill(false);

  for (const word of words) {
    if (word.length === 0) continue;

    for (let i = 0; i <= s.length - word.length; i++) {
      const substr = s.substring(i, i + word.length);
      if (substr === word) {
        for (let j = i; j < i + word.length; j++) {
          boldChars[j] = true;
        }
      }
    }
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (boldChars[i] && (i === 0 || !boldChars[i - 1])) {
      result += "<b>";
    }

    result += s[i];

    if (boldChars[i] && (i === s.length - 1 || !boldChars[i + 1])) {
      result += "</b>";
    }
  }

  return result;
};
