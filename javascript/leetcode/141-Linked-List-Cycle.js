// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let curNode = head;
    let nodeMap = new Map();

    while (curNode && curNode.next) {
        if (nodeMap.has(curNode)) {
            return true;
        }
        nodeMap.set(curNode, 1);
        curNode = curNode.next;
    }
    return false;
};

var hasCycle = function (head) {
    if (head === null) {
        return false;
    }
    let slowNode = head;
    let fastNode = head.next;

    while (slowNode !== fastNode) {
        if (fastNode === null || fastNode.next === null) {
            return false;
        }
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    return true;
};

var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let slowNode = head;
    let fastNode = head.next;

    while (slowNode !== fastNode) {
        if (!fastNode || !fastNode.next) {
            return false;
        }
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    return true;
};

var hasCycle = function (head) {
    if (head === null) {
        return false;
    }
    let slowNode = head;
    let fastNode = head.next;

    while (fastNode && fastNode.next) {
        if (slowNode === fastNode) {
            return true;
        }
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    return false;
};
