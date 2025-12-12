import { describe, it, expect } from 'vitest';
import { deleteDuplicates, ListNode } from './remove-duplicates-from-sorted-list-ii';

// Helper function to create linked list from array
function createList(values: number[]): ListNode | null {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe('deleteDuplicates', () => {
  it('should handle empty list', () => {
    const head = null;
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([]);
  });

  it('should handle single node', () => {
    const head = createList([1]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([1]);
  });

  it('should remove duplicates in the middle (example 1)', () => {
    const head = createList([1, 2, 3, 3, 4, 4, 5]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([1, 2, 5]);
  });

  it('should remove duplicates at the beginning (example 2)', () => {
    const head = createList([1, 1, 1, 2, 3]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([2, 3]);
  });

  it('should handle all duplicates (nothing remains)', () => {
    const head = createList([1, 1, 2, 2, 3, 3]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([]);
  });

  it('should handle all same values', () => {
    const head = createList([1, 1, 1, 1, 1]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([]);
  });

  it('should handle no duplicates', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle duplicates at the end', () => {
    const head = createList([1, 2, 3, 3, 3]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it('should handle two nodes with same value', () => {
    const head = createList([1, 1]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([]);
  });

  it('should handle two nodes with different values', () => {
    const head = createList([1, 2]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([1, 2]);
  });

  it('should handle multiple duplicate groups', () => {
    const head = createList([1, 1, 2, 3, 3, 4, 5, 5]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([2, 4]);
  });

  it('should handle negative numbers', () => {
    const head = createList([-3, -3, -1, 0, 0, 1]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([-1, 1]);
  });

  it('should handle negative to positive range', () => {
    const head = createList([-100, -50, 0, 0, 50, 100]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([-100, -50, 50, 100]);
  });

  it('should handle duplicates with negative numbers at start', () => {
    const head = createList([-1, -1, 0, 1, 2, 2]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([0, 1]);
  });

  it('should handle long chain of same value at beginning', () => {
    const head = createList([1, 1, 1, 1, 2, 3]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([2, 3]);
  });

  it('should handle alternating unique and duplicate values', () => {
    const head = createList([1, 2, 2, 3, 4, 4, 5]);
    const result = deleteDuplicates(head);
    expect(listToArray(result)).toEqual([1, 3, 5]);
  });
});
