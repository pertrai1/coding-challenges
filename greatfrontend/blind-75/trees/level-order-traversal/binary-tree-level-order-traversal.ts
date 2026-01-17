export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * @param {TreeNode | null} root
 * @return {number[][]}
 * @time - O(n) where n is the number of nodes (visits each node once)
 * @space - O(h) for the recursion stack where h is the tree height, plus O(n) for the output array
 */
export function binaryTreeLevelOrderTraversal(
  root: TreeNode | null
): number[][] {
  const levels: number[][] = [];

  function traverseLevel(node: TreeNode, level: number): void {
    if (levels.length === level) {
      levels.push([]);
    }
    levels[level].push(node.val);
    if (node.left) {
      traverseLevel(node.left, level + 1);
    }
    if (node.right) {
      traverseLevel(node.right, level + 1);
    }
  }

  if (root) {
    traverseLevel(root, 0);
  }

  return levels;
}
