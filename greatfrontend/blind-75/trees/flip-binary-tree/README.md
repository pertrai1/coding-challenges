# Flip Binary Tree ![Shield](https://img.shields.io/badge/Level-Easy-green) ![Shield](https://img.shields.io/badge/Category-Trees-blue)

Link to problem: [https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-tree-flip](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-tree-flip)

Given the `root` node of a binary tree, flip the tree by swapping each node's left and right children, then return the root of the flipped tree.

The binary tree is represented by a collection of `TreeNodes`, where each node has optional `left` and `right` child nodes, which are also `TreeNode`s.

A TreeNode has the following interface:

```typescript
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

## Input

- `root: TreeNode`: Root node of the tree. Examples display a level-order traversal of the tree

## Examples

```plaintext
Input: root = [2,1,3]
Output: [2,3,1]
Explanation: The left and right children are swapped.

Input: root = [43,null,-55]
Output: [43,-55]
Explanation: The right child becomes the left child after inversion.

Input: root = [12,8,18,6,null,null,20]
Output: [12,18,8,20,null,null,6]
Explanation: The tree is inverted, with left and right children of each node being swapped.
```

## Constraints

- 1 <= Number of nodes <= 100
- -100 <= `TreeNode.val` <= 100
