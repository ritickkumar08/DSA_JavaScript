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

function deleteEnd(){
    if(head == null){
        console.log("list is empty");
        return
    }
    if(head.next == null){
        head = null;
        return
    }
    let current = head
    
    while(current.next.next != null){
    current = current.next
    }
    let endNode = current
    current.next = null

    endNode = null
}
deleteEnd()

//print
function printList(head){
    let current = head

    while(current != null){
        console.log(current.data);
        current = current.next
    }
}
printList(head)