import { describe, it, expect } from 'vitest';
import { kthSmallestElementInABst, type TreeNode } from './bst-kth-smallest';

// Helper function to create a tree node
function createNode(
  val: number,
  left: TreeNode | null = null,
  right: TreeNode | null = null
): TreeNode {
  return { val, left, right };
}

describe('kthSmallestElementInABst', () => {
  it('should find the 1st smallest element (minimum) in a BST', () => {
    // Tree:     3
    //          / \
    //         1   4
    //          \
    //           2
    const root = createNode(
      3,
      createNode(1, null, createNode(2)),
      createNode(4)
    );
    expect(kthSmallestElementInABst(root, 1)).toBe(1);
  });

  it('should find the kth smallest element in the middle of the BST', () => {
    // Tree:     5
    //          / \
    //         3   6
    //        / \
    //       2   4
    //      /
    //     1
    const root = createNode(
      5,
      createNode(3, createNode(2, createNode(1), null), createNode(4)),
      createNode(6)
    );
    expect(kthSmallestElementInABst(root, 3)).toBe(3);
  });

  it('should find the last element (maximum) in a BST', () => {
    // Tree:     3
    //          / \
    //         1   4
    //          \
    //           2
    const root = createNode(
      3,
      createNode(1, null, createNode(2)),
      createNode(4)
    );
    expect(kthSmallestElementInABst(root, 4)).toBe(4);
  });

  it('should work with a single node tree', () => {
    const root = createNode(1);
    expect(kthSmallestElementInABst(root, 1)).toBe(1);
  });

  it('should work with a left-skewed tree', () => {
    // Tree:     5
    //          /
    //         4
    //        /
    //       3
    //      /
    //     2
    //    /
    //   1
    const root = createNode(
      5,
      createNode(
        4,
        createNode(3, createNode(2, createNode(1), null), null),
        null
      ),
      null
    );
    expect(kthSmallestElementInABst(root, 2)).toBe(2);
    expect(kthSmallestElementInABst(root, 5)).toBe(5);
  });

  it('should work with a right-skewed tree', () => {
    // Tree: 1
    //        \
    //         2
    //          \
    //           3
    //            \
    //             4
    //              \
    //               5
    const root = createNode(
      1,
      null,
      createNode(
        2,
        null,
        createNode(3, null, createNode(4, null, createNode(5)))
      )
    );
    expect(kthSmallestElementInABst(root, 1)).toBe(1);
    expect(kthSmallestElementInABst(root, 3)).toBe(3);
  });

  it('should work with a balanced BST', () => {
    // Tree:       4
    //           /   \
    //          2     6
    //         / \   / \
    //        1   3 5   7
    const root = createNode(
      4,
      createNode(2, createNode(1), createNode(3)),
      createNode(6, createNode(5), createNode(7))
    );
    expect(kthSmallestElementInABst(root, 1)).toBe(1);
    expect(kthSmallestElementInABst(root, 4)).toBe(4);
    expect(kthSmallestElementInABst(root, 7)).toBe(7);
  });

  it('should work with k = 2 on various trees', () => {
    // Tree:     2
    //          / \
    //         1   3
    const root1 = createNode(2, createNode(1), createNode(3));
    expect(kthSmallestElementInABst(root1, 2)).toBe(2);

    // Tree:     3
    //          /
    //         2
    //        /
    //       1
    const root2 = createNode(3, createNode(2, createNode(1), null), null);
    expect(kthSmallestElementInABst(root2, 2)).toBe(2);
  });

  it('should handle a larger BST', () => {
    // Tree:         8
    //             /   \
    //            4     12
    //           / \   /  \
    //          2   6 10  14
    //         / \ / \
    //        1  3 5  7
    const root = createNode(
      8,
      createNode(
        4,
        createNode(2, createNode(1), createNode(3)),
        createNode(6, createNode(5), createNode(7))
      ),
      createNode(12, createNode(10), createNode(14))
    );
    expect(kthSmallestElementInABst(root, 1)).toBe(1);
    expect(kthSmallestElementInABst(root, 5)).toBe(5);
    expect(kthSmallestElementInABst(root, 8)).toBe(8);
    expect(kthSmallestElementInABst(root, 10)).toBe(12);
  });

  it('should work with LeetCode example 1', () => {
    // Tree:     3
    //          / \
    //         1   4
    //          \
    //           2
    const root = createNode(
      3,
      createNode(1, null, createNode(2)),
      createNode(4)
    );
    expect(kthSmallestElementInABst(root, 1)).toBe(1);
  });

  it('should work with LeetCode example 2', () => {
    // Tree:     5
    //          / \
    //         3   6
    //        / \
    //       2   4
    //      /
    //     1
    const root = createNode(
      5,
      createNode(3, createNode(2, createNode(1), null), createNode(4)),
      createNode(6)
    );
    expect(kthSmallestElementInABst(root, 3)).toBe(3);
  });
});
