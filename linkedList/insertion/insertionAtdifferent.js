class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
let head = new Node(1)
let first = new Node(10)
let second = new Node(20)
let third = new Node(30)
//connection
head.next = first
first.next = second
second.next = third

//time complexity - O(1)
//space complexity - O(1)
insertion(first,44)
function insertion(node,data) {
    let newNode = new Node(data)

    newNode.next = node.next
    node.next = newNode
}

//insert at the end
//time complexity - O(n)
insertAtEnd(55)
function insertAtEnd(data) {
    let newNode = new Node(data)
    let current = head
    while (current.next != null) {
        current = current.next
    }

    current.next = newNode
}

function printList(head){
    let current = head

    while(current != null){
        console.log(current.data);
        current = current.next
    }
}
printList(head)
