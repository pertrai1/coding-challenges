# Binary Tree Level Order Traversal

Given the root `node` of a binary tree, return an array of arrays, where each inner array represents the values of nodes at each level of the tree, traversed from left to right.

The binary tree is represented by a collection of `TreeNode`s, where each node has optional `left` and `right` child nodes, which are also `TreeNode`s.

A `TreeNode` has the following interface:

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

```bash
Input: root = [13,null,-55]
Output: [[13],[-55]]
Explanation: The root has two levels: the first level with the value 13, and the second level with the value -55.

Input: root = [1,2,3,4,5,6,7]
Output: [[1],[2,3],[4,5,6,7]]
Explanation: The tree has three levels: [1] at the first level, [2, 3] at the second level, and [4, 5, 6, 7] at the third level.

Input: root = [5,3,8,null,4,7,9]
Output: [[5],[3,8],[4,7,9]]
Explanation: The tree has three levels: [5] at the first level, [3, 8] at the second level, and [4, 7, 9] at the third level.
```

## Constraints

- 1 <= Number of nodes <= 10,000
- -100 <= `TreeNode.val` <= 100
