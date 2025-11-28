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
//insertion at the begining
//time complexity -> O(1)
//space complexity -> O(1)
function insertBegining(key){
    let newNode = new Node(key)
    newNode.next = head
    head = newNode
}

insertBegining(33)
insertBegining(11)

//print list
function printList(head){
    let current = head

    while(current != null){
        console.log(current.data);
        current = current.next
    }
}
printList(head)

console.log(head);
