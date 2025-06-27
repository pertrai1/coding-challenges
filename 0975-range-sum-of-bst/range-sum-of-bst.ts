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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  return traverseTree(root, low, high, 0);
}
function traverseTree(node: TreeNode | null, low: number, high: number, total: number): number {
  if (node === null) {
    return total;
  }
  if (node.val >= low && node.val <= high) {
    total += node.val;
  }
  if (node.left) {
    total = traverseTree(node.left, low, high, total);
  }
  if (node.right) {
    total = traverseTree(node.right, low, high, total);
  }
  return total;
}