/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let minDiff = Infinity;
  let prev: number | null = null;
  function traverseTree(node: TreeNode | null) {
    if (node === null) {
      return 0;
    }
    traverseTree(node.left);
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;
    traverseTree(node.right);
  }
  if (root !== null) {
    traverseTree(root);
  }
  return minDiff;
}