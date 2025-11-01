/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return null;

    let dummy = new ListNode(0, head);
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) {
        if (fast === null) return head;
        fast = fast.next as ListNode;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next as ListNode;
    }

    slow.next = slow.next?.next || null;
    return dummy.next;
}