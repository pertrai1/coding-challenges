/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) return null;
  // Initialize carry = 0 and create a dummy head for the result
  let carry = 0;
  const dummy = new ListNode(0);
  let current = dummy;

  //While either list has nodes OR carry > 0:
  while (l1 !== null || l2 !== null || carry > 0) {
    // Get current values (0 if node is null)
    const val1 = l1 === null ? 0 : l1.val;
    const val2 = l2 === null ? 0 : l2.val;
    // Calculate sum = val1 + val2 + carry
    const sum = val1 + val2 + carry;
    // Create new node with sum % 10
    current.next = new ListNode(sum % 10);
    current = current.next;
    // Update carry = sum // 10
    carry = Math.floor(sum / 10);
    // Move pointers forward
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  // Return result list (excluding dummy head)
  return dummy.next;
}
