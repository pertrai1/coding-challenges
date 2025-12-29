# Binary Search Tree Kth Smallest Element

Given the `root` node of a binary search tree (BST) and an integer `k`, write a function to find and return the `k`k`-th smallest value in the BST. The smallest value in the tree is 1.

The binary tree is represented by a collection of `TreeNodes`, where each node has optional `left` and `right` child nodes, which are also `TreeNodes`.

A TreeNode has the following interface:

```javascript
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

## Input

- `root: TreeNode`: Root node of the tree. Examples display a level-order traversale of the tree
- `k: number`: A positive integer

## Examples

```bash
Input: root = [7,3,10,1,5,8,12], k = 2
Output: 3
Explanation: In this BST, the second smallest value is 3.

Input: root = [1,null,2,null,3,null,4,null,5], k = 4
Output: 4
Explanation: In this right-skewed BST, the fourth smallest value is 4.

Input: root = [8,6,10,5,7,9,12], k = 5
Output: 9
Explanation: In this BST, the fifth smallest value is 9.
```

## Constraints

- 1 <= `k` <= Number of nodes <= 1000
- 1 <= `TreeNode.val` <= 1,000,000
