import { describe, it, expect } from 'vitest';
import { addTwoNumbers, ListNode } from './add-two-numbers';

/**
 * Helper function to create a linked list from an array
 */
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

/**
 * Helper function to convert linked list to array for easier comparison
 */
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe('addTwoNumbers', () => {
  it('should add two numbers: 342 + 465 = 807', () => {
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    // Explanation: 342 + 465 = 807
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 0, 8]);
  });

  it('should add two zeros', () => {
    // Input: l1 = [0], l2 = [0]
    // Output: [0]
    const l1 = createLinkedList([0]);
    const l2 = createLinkedList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0]);
  });

  it('should handle different length lists with carry', () => {
    // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    // Output: [8,9,9,9,0,0,0,1]
    const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createLinkedList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  it('should handle single digit addition', () => {
    // Input: l1 = [2], l2 = [3]
    // Output: [5]
    const l1 = createLinkedList([2]);
    const l2 = createLinkedList([3]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([5]);
  });

  it('should handle addition with carry at the end', () => {
    // Input: l1 = [5], l2 = [5]
    // Output: [0, 1]
    const l1 = createLinkedList([5]);
    const l2 = createLinkedList([5]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 1]);
  });

  it('should handle when one list is longer', () => {
    // Input: l1 = [9,9], l2 = [1]
    // Output: [0,0,1]
    const l1 = createLinkedList([9, 9]);
    const l2 = createLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 0, 1]);
  });

  it('should return null when both lists are null', () => {
    const result = addTwoNumbers(null, null);
    expect(result).toBeNull();
  });
});
