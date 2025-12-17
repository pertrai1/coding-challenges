class TrieNode {
  children: { [key: string]: TrieNode } = {};
  word: string | null = null;
}

class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }

    current.word = word;
  }

  search(word: string): boolean {
    let current = this.root;
    for (const char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.word !== null;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}

function findWords(board: string[][], words: string[]): string[] {
  if (board.length < 1 || words.length < 1) {
    return [];
  }
  // Storing founds words in set to avoid duplicates
  const wordsFound = new Set<string>();

  // Build Trie from words
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  // Loop through every cell in board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const char = board[i][j];
      // start DFS only if char exists in root's children
      if (trie.root.children[char]) {
        backtrackDFS(i, j, trie.root.children[char]);
      }
    }
  }

  // in DFS
  function backtrackDFS(i: number, j: number, node: TrieNode) {
    // if node marks a word, add to wordsFound
    if (node.word) {
      wordsFound.add(node.word);
      // avoid duplicates
      node.word = null;
    }
    const temp = board[i][j];
    // mark cell as visited
    board[i][j] = '#';

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];
    // continue DFS in 4 directions
    for (const [dx, dy] of directions) {
      const ni = i + dx;
      const nj = j + dy;
      if (
        ni >= 0 &&
        ni < board.length &&
        nj >= 0 &&
        nj < board[0].length &&
        board[ni][nj] !== '#' &&
        node.children[board[ni][nj]]
      ) {
        backtrackDFS(ni, nj, node.children[board[ni][nj]]);
      }
    }

    // backtrack
    board[i][j] = temp;
  }

  return Array.from(wordsFound);
}
