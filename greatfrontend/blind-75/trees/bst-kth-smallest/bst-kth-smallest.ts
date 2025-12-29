export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
/**
 * @space - O(h) which is the height of the tree.
 * @time - O(h + k) where h is the height of the tree and k is the number of nodes needed to visit.
 */
export function kthSmallestElementInABst(
  root: TreeNode | null,
  k: number
): number {
  const stack: TreeNode[] = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (root) {
      // Push all left nodes onto stack (go as far left as possible)
      stack.push(root);
      root = root.left;
    }
    // Pop the leftmost unvisited node (next in sorted order)
    root = stack.pop()!;
    // Decrement k and check if we've reached the kth smallest
    if (--k === 0) {
      return root.val;
    }
    // Move to the right subtree to continue in-order traversal
    root = root.right;
  }
}
