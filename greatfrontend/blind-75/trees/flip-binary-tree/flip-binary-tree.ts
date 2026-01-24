export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * @time O(n) where n is each node in the tree
 * @space O(h) where h is the height of the tree
 */
export function flipBinaryTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const rightNode = flipBinaryTree(root.right);
  const leftNode = flipBinaryTree(root.left);

  root.left = rightNode;
  root.right = leftNode;

  return root;
}
