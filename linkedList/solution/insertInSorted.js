// Given a linked list sorted in ascending order and an integer called key, 
// insert data in the linked list such that the list remains sorted.
/**
 * @param {Node} node
 * @param {number} key
 * @return {Node} node
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head1 = new Node(10)
let node1 = new Node(20)
let node2 = new Node(30)
let node3 = new Node(40)
let node4 = new Node(50)
let node5 = new Node(60)
head1.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

class Solution {
    sortedInsert(node, key) {
        const newNode = new Node(key);
        // your code here
       if(node === null || key < node.data){
            newNode.next = node
            return newNode;
       }

       let current = node
        // Traverse to find correct position
        while (current.next !== null && current.next.data < key) {
            current = current.next;
        }

        // Insert here
        newNode.next = current.next;
        current.next = newNode;

        return node;
    }
}
const ob = new Solution()
ob.sortedInsert(head1,45);

function printList(head){
    let current = head

    while(current != null){
        console.log(current.data);
        current = current.next
    }
}
printList(head1)

