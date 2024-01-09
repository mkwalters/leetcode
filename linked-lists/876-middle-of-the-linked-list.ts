const middleNode = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }
  const length = linkedListLength(head);
  for (let i = 0; i < length / 2; i) {
    head = head!.next;
  }
  return head;
};

const linkedListLength = (head: ListNode | null): number => {
  let count = 0;

  while (!head) {
    count++;
    head = head!.next;
  }
  return count;
};
