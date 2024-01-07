// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const sortList = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const dummy = new ListNode(-1, null);
  let current = dummy;

  while (list1 || list2) {
    if (!list1) {
      current.next = list2;
      list2 = list2!.next;
    } else if (!list2) {
      current.next = list1;
      list1 = list1!.next;
    }

    if (list1!.val <= list2!.val) {
      current.next = list1!;
      list1 = list1!.next;
    } else {
      current.next = list2!;
      list2 = list2!.next;
    }
    current = current.next;
  }

  return dummy.next;
};
