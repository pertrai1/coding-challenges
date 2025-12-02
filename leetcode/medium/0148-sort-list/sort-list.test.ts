import { describe, it, expect } from 'vitest';
import { ListNode, sortList } from './sort-list';

// Helper: Convert array to linked list
function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper: Convert linked list to array
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('sortList', () => {
  // ==========================================
  // Edge Cases
  // ==========================================
  describe('Edge Cases', () => {
    it('should return null for empty list', () => {
      const head = arrayToList([]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([]);
    });

    it('should return same node for single element list', () => {
      const head = arrayToList([1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1]);
    });

    it('should handle two elements already sorted', () => {
      const head = arrayToList([1, 2]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2]);
    });

    it('should handle two elements in reverse order', () => {
      const head = arrayToList([2, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2]);
    });
  });

  // ==========================================
  // LeetCode Examples
  // ==========================================
  describe('LeetCode Examples', () => {
    it('Example 1: should sort [4,2,1,3] to [1,2,3,4]', () => {
      const head = arrayToList([4, 2, 1, 3]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('Example 2: should sort [-1,5,3,4,0] to [-1,0,3,4,5]', () => {
      const head = arrayToList([-1, 5, 3, 4, 0]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([-1, 0, 3, 4, 5]);
    });

    it('Example 3: should return [] for empty list', () => {
      const head = arrayToList([]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([]);
    });
  });

  // ==========================================
  // Already Sorted / Reverse Sorted
  // ==========================================
  describe('Already Sorted / Reverse Sorted', () => {
    it('should handle already sorted list', () => {
      const head = arrayToList([1, 2, 3, 4, 5]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted list', () => {
      const head = arrayToList([5, 4, 3, 2, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle longer reverse sorted list', () => {
      const head = arrayToList([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  // ==========================================
  // Duplicate Values
  // ==========================================
  describe('Duplicate Values', () => {
    it('should handle all identical elements', () => {
      const head = arrayToList([5, 5, 5, 5, 5]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([5, 5, 5, 5, 5]);
    });

    it('should handle some duplicate elements', () => {
      const head = arrayToList([3, 1, 2, 1, 3, 2]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 1, 2, 2, 3, 3]);
    });

    it('should handle duplicates at boundaries', () => {
      const head = arrayToList([1, 5, 3, 5, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 1, 3, 5, 5]);
    });

    it('should handle two identical elements', () => {
      const head = arrayToList([7, 7]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([7, 7]);
    });
  });

  // ==========================================
  // Negative Numbers
  // ==========================================
  describe('Negative Numbers', () => {
    it('should handle all negative numbers', () => {
      const head = arrayToList([-3, -1, -5, -2, -4]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([-5, -4, -3, -2, -1]);
    });

    it('should handle mix of negative and positive numbers', () => {
      const head = arrayToList([3, -1, 0, -5, 2]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([-5, -1, 0, 2, 3]);
    });

    it('should handle large negative numbers', () => {
      const head = arrayToList([-100000, 100000, -50000, 50000, 0]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([-100000, -50000, 0, 50000, 100000]);
    });
  });

  // ==========================================
  // Boundary Values (Constraints)
  // ==========================================
  describe('Boundary Values', () => {
    it('should handle minimum constraint value -10^5', () => {
      const head = arrayToList([-100000, 0, 100000]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([-100000, 0, 100000]);
    });

    it('should handle maximum constraint value 10^5', () => {
      const head = arrayToList([100000, -100000]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([-100000, 100000]);
    });

    it('should handle zero', () => {
      const head = arrayToList([0]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([0]);
    });

    it('should handle multiple zeros', () => {
      const head = arrayToList([0, 0, 0]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([0, 0, 0]);
    });
  });

  // ==========================================
  // Odd vs Even Length Lists
  // ==========================================
  describe('Odd vs Even Length Lists', () => {
    it('should handle odd length list (3 elements)', () => {
      const head = arrayToList([3, 1, 2]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle even length list (4 elements)', () => {
      const head = arrayToList([4, 2, 3, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('should handle odd length list (7 elements)', () => {
      const head = arrayToList([7, 3, 5, 1, 6, 2, 4]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should handle even length list (8 elements)', () => {
      const head = arrayToList([8, 4, 6, 2, 7, 3, 5, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  // ==========================================
  // Special Patterns
  // ==========================================
  describe('Special Patterns', () => {
    it('should handle alternating high-low pattern', () => {
      const head = arrayToList([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should handle nearly sorted list (one element out of place)', () => {
      const head = arrayToList([1, 2, 3, 5, 4]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle first element needs to move to end', () => {
      const head = arrayToList([5, 1, 2, 3, 4]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle last element needs to move to start', () => {
      const head = arrayToList([2, 3, 4, 5, 1]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle mountain pattern (ascending then descending)', () => {
      const head = arrayToList([1, 3, 5, 7, 6, 4, 2]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should handle valley pattern (descending then ascending)', () => {
      const head = arrayToList([5, 3, 1, 2, 4, 6]);
      const result = sortList(head);
      expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  // ==========================================
  // Larger Lists (Performance Sanity Check)
  // ==========================================
  describe('Larger Lists', () => {
    it('should handle 100 elements in random order', () => {
      const arr = Array.from({ length: 100 }, (_, i) => i + 1);
      // Shuffle array
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      const head = arrayToList(arr);
      const result = sortList(head);
      const expected = Array.from({ length: 100 }, (_, i) => i + 1);
      expect(listToArray(result)).toEqual(expected);
    });

    it('should handle 1000 elements in reverse order', () => {
      const arr = Array.from({ length: 1000 }, (_, i) => 1000 - i);
      const head = arrayToList(arr);
      const result = sortList(head);
      const expected = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(listToArray(result)).toEqual(expected);
    });
  });
});
