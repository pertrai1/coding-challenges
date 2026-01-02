export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @time - O(n) where n is the number of nodes in the list
 * @space - O(1) because slow and fast are only pointers
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  // iterate the list as long as there is a node
  while (fast && fast.next) {
    // tortoise
    slow = slow!.next;
    // hare
    fast = fast.next.next;
    // if they meet we are now ready to start figuring out the cycle
    if (slow === fast) {
      // reset slow to proper starting position
      slow = head;
      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }
      return slow;
    }
  }
  return null;
}
