class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
@time - O(n) where n is the length of the linked list
@space - O(1) because of the need for pointers
*/
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  // Handle empty list
  if (head === null) {
    return null;
  }

  // Create a dummy head in cases where original head gets removed
  const dummy = new ListNode(0);
  dummy.next = head;

  // Points to last node that is definitely unique
  let prev = dummy;
  // Current node being looked at
  let current = head;

  while (current !== null) {
    // Check if current node has duplicates
    if (current.next !== null && current.val === current.next.val) {
      // Skip all nodes with the same value
      const duplicateVal = current.val;
      while (current !== null && current.val === duplicateVal) {
        current = current.next;
      }
      // Connect prev to the first non-duplicate node
      prev.next = current;
    } else {
      // Current node is unique, move prev forward
      prev = current;
      current = current.next;
    }
  }

  return dummy.next;
}
