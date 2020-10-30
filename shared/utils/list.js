var reverseList = function(head) {
  let [prev, curr] = [null, head];
  while(curr) {
     let temp = curr.next;
     curr.next = prev;
     prev = curr;
     curr = temp;
  }
  return prev;
};
const mergeTwoList = function(l1, l2) {
  if (l1 === null) {
     return l2
  }
  if (l2 === null) {
     return l1;
  }
  if (l1.val < l2.val) {
     l1.next = mergeTwoList(l1.next, l2);
     return l1;
  }
  else {
     l2.next = mergeTwoList(l1, l2.next);
     return l2;
  }
}
const hasCycle = function(list) {
  let slow = list;
  let fast = list.next;
  while(slow !== fast) {
     if (!fast || !fast.next) {
        return false;
     }
     slow = slow.next;
     fast = fast.next.next;
  }
  return true;
}
const middleNode = function(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};


const listNode = {
  val: 1,
  next: {
     val: 3,
     next: {
        val: 2,
        next: {
           val: 5,
           next: null,
        },
     }
  }
}
console.log(middleNode(listNode))