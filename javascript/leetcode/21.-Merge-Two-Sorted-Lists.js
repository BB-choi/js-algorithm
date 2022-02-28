// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let answer = new ListNode();
    let cur = answer;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            cur.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        cur = cur.next;
    }

    while (list1) {
        cur.next = new ListNode(list1.val);
        list1 = list1.next;
        cur = cur.next;
    }
    while (list2) {
        cur.next = new ListNode(list2.val);
        list2 = list2.next;
        cur = cur.next;
    }

    return answer.next;
};
