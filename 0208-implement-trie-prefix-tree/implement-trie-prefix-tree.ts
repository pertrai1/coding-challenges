class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
}

/*
* @time - All operations run in O(L) time where L is the word length. This is because we process each character once.
* @space - Depends on the total number of characters across all words inserted, but shared prefixes help to reduce redundancy.
*/
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // @time - O(L) where L is the length of the word
  insert(word: string): void {
    // Start at root
    let current = this.root;
    // For each char in word...
    for (const char of word) {
      // If char not in current.children, add new TrieNode
      // Each lookup/insertion is O(1)
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      // Move to the child node for this character
      current = current.children[char];
    }
    // Mark the last node as end of a word
    current.isEndOfWord = true;
  }

  // @time - O(L) where L is the length of the word
  search(word: string): boolean {
    let current = this.root;
    // Traverse word
    for (const char of word) {
      // If char not found in current.children then the word does not exists
      // Each child being accessed is O(1)
      if (!current.children[char]) {
        return false;
      }
      // Move to the child node
      current = current.children[char];
    }
    // After traversing, check if current is end of the word
    return current.isEndOfWord;
  }

  // @time - O(L) where L is the length of the prefix
  startsWith(prefix: string): boolean {
    // Same as search, but return true if path exists (ignore isEndOfWord)
    let current = this.root;

    for (const char of prefix) {
      // Each child being accessed is O(1)
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }

    // Full prefix path exits
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */