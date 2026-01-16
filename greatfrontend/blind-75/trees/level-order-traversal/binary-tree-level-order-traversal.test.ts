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

  it('should match the example with a negative value', () => {
    const root: TreeNode = {
      val: 13,
      left: null,
      right: { val: -55, left: null, right: null }
    };
    expect(binaryTreeLevelOrderTraversal(root)).toEqual([[13], [-55]]);
  });

  it('should match the full three-level example', () => {
    const root: TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
      },
      right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null }
      }
    };
    expect(binaryTreeLevelOrderTraversal(root)).toEqual([
      [1],
      [2, 3],
      [4, 5, 6, 7]
    ]);
  });

  it('should match the example with missing left child', () => {
    const root: TreeNode = {
      val: 5,
      left: {
        val: 3,
        left: null,
        right: { val: 4, left: null, right: null }
      },
      right: {
        val: 8,
        left: { val: 7, left: null, right: null },
        right: { val: 9, left: null, right: null }
      }
    };
    expect(binaryTreeLevelOrderTraversal(root)).toEqual([
      [5],
      [3, 8],
      [4, 7, 9]
    ]);
  });
});
