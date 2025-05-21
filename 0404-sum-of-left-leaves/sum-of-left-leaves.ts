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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = 0;
    function traverseTree(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            }
            traverseTree(node.left);
        }
        if (node.right) {
            traverseTree(node.right);
        }
    }
    traverseTree(root);
    return sum;
};