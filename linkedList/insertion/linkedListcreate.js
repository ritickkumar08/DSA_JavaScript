class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(1)
let first = new Node(10)
let second = new Node(20)

//connecting a node
head.next = first
first.next = second

traverse(head)
function traverse(head) {
    let current = head

    while(current != null){
        console.log(current.data);
        current = current.next
    }
}
