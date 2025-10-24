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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    const n = preorder.length;
    if (n === 0) {
        return null;
    }
    let index = 0;
    function build(minVal: number, maxVal: number) {
        if (index >= n) {
            return null;
        }
        const val = preorder[index];
        if (val < minVal || val > maxVal) {
            return null;
        }

        index++;
        const node = new TreeNode(val);
        node.left = build(minVal, node.val);
        node.right = build(node.val, maxVal);
        return node;
    }
    return build(-Infinity, Infinity);
};