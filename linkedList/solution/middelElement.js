// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.


// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    count = 0
    for(let i = head ; i != null ; i = i.next){
        count++
    }
    let mid = Math.floor(count / 2)
    let i = 1;
    let current = head
    while(i <= mid){
        current = current.next
        i++
    }
    head = current
    return head
};