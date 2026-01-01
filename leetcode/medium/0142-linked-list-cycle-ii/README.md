# [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii) ![Shield](https://img.shields.io/badge/Medium-orange)

Given the `head` of a linked list, return _the node where the cycle begins. If there is no cycle, return_ `null`.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to (**0-indexed**). It is `-1` if there is no cycle. **Note that** `pos` **is not passed as a parameter**.

**Do not modify** the linked list.

## Example 1

![Image 1](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```bash
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

## Example 2

![Image 2](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

```bash
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

## Example 3

![Image 3](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

```bash
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

## Constraints

- The number of the nodes in the list is in the range `[0, 10⁴]`.
- `-10⁵ <= Node.val <= 10⁵`
- `pos` is `-1` or a **valid index** in the linked-list.

## Follow up

Can you solve it using `O(1)` (i.e. constant) memory?
