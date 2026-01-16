export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

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
