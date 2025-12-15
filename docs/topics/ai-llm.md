# AI & LLM-Oriented LeetCode Problems

Curated LeetCode problems that reinforce algorithms and data structures used in modern generative AI/LLM systems: tokenization, sequence alignment, attention-style windows, retrieval, and sparse linear algebra.

## Tokenization & language primitives
- [0208 - Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) — prefix vocabulary construction for token lookup/autocomplete.
- [0212 - Word Search II](https://leetcode.com/problems/word-search-ii/) — trie-guided backtracking similar to constrained decoding.
- [0139 - Word Break](https://leetcode.com/problems/word-break/) — DP segmentation akin to validating token boundaries (BPE-like).

## Sequence alignment & generation quality
- [0072 - Edit Distance](https://leetcode.com/problems/edit-distance/) — Levenshtein alignment for evaluation and decoding heuristics.
- [0115 - Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) — sequence likelihood/counting via DP.
- [1143 - Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) — overlap/ROUGE-style similarity between sequences.

## Attention windows & context management
- [0076 - Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) — minimal span covering required tokens (attention window intuition).
- [0340 - Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) — fixed-size vocabulary within a context window.

## Retrieval & similarity search
- [0692 - Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) — vocabulary curation and frequency-based ranking.
- [0658 - Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) — 1D k-NN building block for ANN-style retrieval.
- [0973 - K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) — vector similarity search (Euclidean/cosine analog).

## Sparse linear algebra for transformer kernels
- [0311 - Sparse Matrix Multiplication](https://leetcode.com/problems/sparse-matrix-multiplication/) — efficient matmul on sparse activations/weights.
- [1570 - Dot Product of Two Sparse Vectors](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/) — embedding similarity with sparse representations.

## Graph reasoning for semantic transitions
- [0127 - Word Ladder](https://leetcode.com/problems/word-ladder/) — shortest-path search between tokens/words using BFS.
