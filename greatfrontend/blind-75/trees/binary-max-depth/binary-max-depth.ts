export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function binaryTreeMaximumDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftSide = binaryTreeMaximumDepth(root.left);
  const rightSide = binaryTreeMaximumDepth(root.right);
  return 1 + Math.max(leftSide, rightSide);
}
