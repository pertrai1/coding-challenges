import { describe, it, expect } from 'vitest';
import {
  binaryTreeLevelOrderTraversal,
  TreeNode
} from './binary-tree-level-order-traversal';

describe('binaryTreeLevelOrderTraversal', () => {
  it('should return empty array for an empty tree', () => {
    const result = binaryTreeLevelOrderTraversal(null);
    expect(result).toEqual([]);
  });

  it('should handle a single-node tree', () => {
    const root: TreeNode = { val: 1, left: null, right: null };
    const result = binaryTreeLevelOrderTraversal(root);
    expect(result).toEqual([[1]]);
  });

  it('should handle a balanced tree', () => {
    const root: TreeNode = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null }
    };
    const result = binaryTreeLevelOrderTraversal(root);
    expect(result).toEqual([[1], [2, 3]]);
  });

  it('should handle an unbalanced tree', () => {
    const root: TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: null
      },
      right: { val: 3, left: null, right: null }
    };
    const result = binaryTreeLevelOrderTraversal(root);
    expect(result).toEqual([[1], [2, 3], [4]]);
  });
});
