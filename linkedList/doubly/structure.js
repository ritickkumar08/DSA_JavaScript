var head 

class Node{
    constructor(data){
        this.previous = null;
        this.data = data
        this.next = null 
    }
}

function pushNode(data){
    let newNode = new Node(data)
    if(head == null){
        head = newNode
        return
    }
    newNode.next = head
    head.previous = newNode
    head = newNode
}
pushNode(3)
pushNode(2)
pushNode(1)

function printList(head) {
    let current = head

    while(current != null){
        console.log(current.data);
        current = current.next
    }
}
printList(head)
