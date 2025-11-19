class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 0) {
    return head;
  }
  let n = 1;
  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
    n++;
  }

  k = k % n;
  if (k === 0) {
    return head;
  }

  let fast: ListNode = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next!;
  }

  let slow: ListNode = head;
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next!;
  }

  const newHead = slow.next;
  fast.next = head;
  slow.next = null;
  return newHead;
}
