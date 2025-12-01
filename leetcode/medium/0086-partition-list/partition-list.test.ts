import { describe, it, expect } from 'vitest';
import { partition } from './partition-list';

// Helper class to create linked lists for testing
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Helper function to create a linked list from an array
function createList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array for comparison
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('partition', () => {
  // LeetCode Examples
  describe('LeetCode examples', () => {
    it('Example 1: head = [1,4,3,2,5,2], x = 3 → [1,2,2,4,3,5]', () => {
      const head = createList([1, 4, 3, 2, 5, 2]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 2, 2, 4, 3, 5]);
    });

    it('Example 2: head = [2,1], x = 2 → [1,2]', () => {
      const head = createList([2, 1]);
      const result = partition(head, 2);
      expect(listToArray(result)).toEqual([1, 2]);
    });
  });

  // Edge Cases: Empty and Single Element
  describe('edge cases - empty and single element', () => {
    it('should handle empty list', () => {
      const result = partition(null, 5);
      expect(result).toBeNull();
    });

    it('should handle single node less than x', () => {
      const head = createList([1]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([1]);
    });

    it('should handle single node greater than x', () => {
      const head = createList([10]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([10]);
    });

    it('should handle single node equal to x', () => {
      const head = createList([5]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([5]);
    });
  });

  // Edge Cases: All elements in one partition
  describe('edge cases - all elements in one partition', () => {
    it('should handle all elements less than x', () => {
      const head = createList([1, 2, 3, 4]);
      const result = partition(head, 10);
      expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('should handle all elements greater than x', () => {
      const head = createList([5, 6, 7, 8]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([5, 6, 7, 8]);
    });

    it('should handle all elements equal to x', () => {
      const head = createList([5, 5, 5, 5]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([5, 5, 5, 5]);
    });

    it('should handle all elements greater than or equal to x', () => {
      const head = createList([5, 6, 5, 7]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([5, 6, 5, 7]);
    });
  });

  // Order Preservation Tests
  describe('relative order preservation', () => {
    it('should preserve order of elements less than x', () => {
      const head = createList([1, 5, 2, 6, 3, 7]);
      const result = partition(head, 5);
      // Elements < 5 should maintain order: 1, 2, 3
      // Elements >= 5 should maintain order: 5, 6, 7
      expect(listToArray(result)).toEqual([1, 2, 3, 5, 6, 7]);
    });

    it('should preserve order when elements alternate', () => {
      const head = createList([5, 1, 6, 2, 7, 3]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([1, 2, 3, 5, 6, 7]);
    });
  });

  // Negative Numbers
  describe('negative numbers', () => {
    it('should handle negative values in list', () => {
      const head = createList([-3, 5, -2, 4, -1]);
      const result = partition(head, 0);
      expect(listToArray(result)).toEqual([-3, -2, -1, 5, 4]);
    });

    it('should handle all negative values', () => {
      const head = createList([-5, -3, -4, -1, -2]);
      const result = partition(head, -2);
      expect(listToArray(result)).toEqual([-5, -3, -4, -1, -2]);
    });

    it('should handle negative partition value x', () => {
      const head = createList([1, -1, 2, -2, 0]);
      const result = partition(head, -1);
      expect(listToArray(result)).toEqual([-2, 1, -1, 2, 0]);
    });

    it('should handle mixed positive and negative with negative x', () => {
      const head = createList([-100, 50, -50, 100]);
      const result = partition(head, 0);
      expect(listToArray(result)).toEqual([-100, -50, 50, 100]);
    });
  });

  // Boundary Values (from constraints)
  describe('boundary values from constraints', () => {
    it('should handle minimum node value (-100)', () => {
      const head = createList([-100, 0, 100]);
      const result = partition(head, 0);
      expect(listToArray(result)).toEqual([-100, 0, 100]);
    });

    it('should handle maximum node value (100)', () => {
      const head = createList([100, 0, -100]);
      const result = partition(head, 50);
      expect(listToArray(result)).toEqual([0, -100, 100]);
    });

    it('should handle minimum x value (-200)', () => {
      const head = createList([-100, 0, 100]);
      const result = partition(head, -200);
      // All values >= -200, so list should be unchanged
      expect(listToArray(result)).toEqual([-100, 0, 100]);
    });

    it('should handle maximum x value (200)', () => {
      const head = createList([-100, 0, 100]);
      const result = partition(head, 200);
      // All values < 200, so list should be unchanged
      expect(listToArray(result)).toEqual([-100, 0, 100]);
    });

    it('should handle x outside node value range (x = 101)', () => {
      const head = createList([50, 100, 25, 75]);
      const result = partition(head, 101);
      expect(listToArray(result)).toEqual([50, 100, 25, 75]);
    });

    it('should handle x outside node value range (x = -101)', () => {
      const head = createList([50, -100, 25, -50]);
      const result = partition(head, -101);
      expect(listToArray(result)).toEqual([50, -100, 25, -50]);
    });
  });

  // Duplicate Values
  describe('duplicate values', () => {
    it('should handle duplicates of x', () => {
      const head = createList([3, 1, 3, 2, 3]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 2, 3, 3, 3]);
    });

    it('should handle all duplicates less than x', () => {
      const head = createList([2, 2, 2, 2]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([2, 2, 2, 2]);
    });

    it('should handle duplicates on both sides of partition', () => {
      const head = createList([1, 5, 1, 5, 1, 5]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 1, 1, 5, 5, 5]);
    });

    it('should handle duplicates of partition value mixed with others', () => {
      const head = createList([3, 1, 3, 4, 3, 2]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 2, 3, 3, 4, 3]);
    });
  });

  // Two Element Lists
  describe('two element lists', () => {
    it('should handle [small, large]', () => {
      const head = createList([1, 5]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 5]);
    });

    it('should handle [large, small]', () => {
      const head = createList([5, 1]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 5]);
    });

    it('should handle [equal, equal]', () => {
      const head = createList([3, 3]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([3, 3]);
    });

    it('should handle [small, equal]', () => {
      const head = createList([1, 3]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 3]);
    });

    it('should handle [equal, small]', () => {
      const head = createList([3, 1]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 3]);
    });
  });

  // Specific Partition Scenarios
  describe('specific partition scenarios', () => {
    it('should handle first element being the partition value', () => {
      const head = createList([3, 1, 4, 2]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('should handle last element being the partition value', () => {
      const head = createList([1, 4, 2, 3]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 2, 4, 3]);
    });

    it('should handle partition at the middle', () => {
      const head = createList([1, 2, 3, 4, 5]);
      const result = partition(head, 3);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle x = 0 with positive and negative', () => {
      const head = createList([3, -3, 0, 2, -2]);
      const result = partition(head, 0);
      expect(listToArray(result)).toEqual([-3, -2, 3, 0, 2]);
    });
  });

  // Longer Lists
  describe('longer lists', () => {
    it('should handle a longer list with mixed values', () => {
      const head = createList([9, 1, 8, 2, 7, 3, 6, 4, 5]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 9, 8, 7, 6, 5]);
    });

    it('should handle sorted ascending list', () => {
      const head = createList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle sorted descending list', () => {
      const head = createList([9, 8, 7, 6, 5, 4, 3, 2, 1]);
      const result = partition(head, 5);
      expect(listToArray(result)).toEqual([4, 3, 2, 1, 9, 8, 7, 6, 5]);
    });
  });
});
