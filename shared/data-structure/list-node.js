/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归反转
const reverseList = function(head) {
  const reverse = function(prev, curr) {
    if (!curr) {
      return prev;
    }
    let next = curr.next;
    curr.next = prev;
    return reverse(curr, next);
  }
  reverse(null, head)
};
// 循环反转
const reverseList2 = function(head) {
  let prev = null;
  let curr = head;
  while(curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return curr;
};
// 判断是否有环

const hasCycle = function(head) {
  let slow = head;
  let fast = head.next.next;
  while(slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
}
const getMiddleNode = function(head) {
  const slow = head;
  const fast = head;
  while (fast !== null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next
  }
  return slow;
}

