# Pólya-Inspired Coding Problem Quickstart

A structured approach to solving coding problems inspired by George Pólya's problem-solving techniques.
This quickstart guide breaks down the problem-solving process into four key phases: Understand, Plan, Execute, and Reflect. Each phase includes specific goals, strategies, and templates to help you systematically tackle coding challenges.

## Table of Contents

- [Understand](#understand)
- [Plan](#plan)
- [Execute](#execute)
- [Reflect](#reflect)

## Understand

> Goal: Grasp the structure, constraints, and hidden patterns before touching the keyboard.

- Restate the problem in your own words.
- Identify unknowns, givens, and constraints.
- Determine input sizes and value ranges.
- Examine edge cases (empty input, minimal/maximal inputs, duplicates, special patterns.
- Visualize the structure (arrays, pointers, trees, graphs, intervals).

Template:

```plaintext
Restatement:
  - Given a `m x n` board and a list of words, return all the words in the list that are on the board. The words can be stitched together by connecting characters horizontally and vertically adjacent cells. The same letter cell can't be used more than once in a word.
Inputs:
  - `board`: A 2D array of characterts
  - `words`: An array of strings that make up words
Constraints:
  - `m == board.length`
  - `n == board[i].length`
  - `1 <= m, n <= 12`
  - `board[i][j]` is a lowercase English letter.
  - `1 <= words.length <= 3 * 10^4`
  - `1 <= words[i].length <= 10`
  - `words[i]` consists of lowercase English letters.
Edge Cases:
  - Empty board
  - Empty words list
  - Words longer than the board dimensions
Visualization Notes:
  - Visualize the board as a grid and the words as paths that can be traced through adjacent cells.
```

## Plan

> Goal: Form a strategy using pattern recognition, simplification, and invariants.

- Recognize patterns similar to known problem types.
- Solve a simpler or smaller version first.
- Choose a primary technique (two pointers, sliding window, hashing, DP, BFS/DFS, recursion, sorting, binary search, greedy, stack/heap, prefix/suffix arrays).
- Work backward from the desired output.
- Identify invariants that must remain true during processing.

Template:

```plaintext
Recognized Pattern:
  - Backtracking and Trie data structure for efficient word search on a grid.
Simplified Version Strategy:
  - Start with searching for a single word on a smaller board.
Chosen Technique:
  - Backtracking combined with Trie for prefix matching.
Invariant(s):
  - Each cell can only be used once per word search.
  - The current path must always correspond to a valid prefix in the Trie.
```

## Execute

> Goal: Write intentional, structured TypeScript code guided by your plan.

- Start with a code skeleton (signature, base cases, loops, data structures).
- Implement methodically according to the plan.
- Track the meaning of each variable, pointer, or state.
- Maintain invariants with each step.

Template:

```plaintext
Skeleton Outline:
- Function signature: findWords(board: string[][], words: string[]): string[]
- Base cases:
  - If board or words are empty, return an empty array.
- Data structures
  - Trie for storing words.
  - Set for storing found words to avoid duplicates.
- Main loop / recursion plan
  - Build the Trie from the words list.
  - For each cell in the board, initiate a backtracking search.
  - During backtracking, check if the current path forms a valid word in the Trie.
Notes While Coding:
  - Ensure to mark cells as visited during backtracking and unmark them when backtracking completes.
  - Use a Set to store found words to handle duplicates efficiently.
```

## Reflect

> Goal: Confirm correctness, optimize clarity, and convert the learning into future intuition.

- Test against edge cases and tricky patterns.
- Validate time and space complexity.
- Simplify logic where possible.
- Generalize the insight into a reusable pattern for future problems.

Template:

```plaintext
Edge Case Results:
Time Complexity:
Space Complexity:
Possible Simplifications:
Generalized Insight:
```
