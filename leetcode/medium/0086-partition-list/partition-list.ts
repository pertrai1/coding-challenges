class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
Complexity
@time: O(n) to traverse the list
@space: O(1) the variables created are pointers to the list and the nodes themselves already exist in memory.
*/
export function partition(head: ListNode | null, x: number): ListNode | null {
  // create dummy head pointers
  // these anchor to the start of each list
  const lessDummy = new ListNode(0);
  const geDummy = new ListNode(0);

  // create dummy tail pointers
  // move these to incrementally build the lists
  let lessTail = lessDummy;
  let geTail = geDummy;

  // traverse the original list
  let current = head;
  while (current != null) {
    if (current.val < x) {
      lessTail.next = current;
      lessTail = lessTail.next;
    } else {
      geTail.next = current;
      geTail = geTail.next;
    }
    current = current.next;
  }

  // this will break the link with the original list
  // terminate to avoid cycles
  geTail.next = null;

  // connect both of the lists
  lessTail.next = geDummy.next;

  // head of the less-than partition
  return lessDummy.next;
}
