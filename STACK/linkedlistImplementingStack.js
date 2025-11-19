class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null
        this.length = 0
    }

    push(value){
       const newNode = new Node(value)
       newNode.next = this.top
       this.top = newNode
       this.length++
    }
    pop(){
        if(!this.top) return null
        const value = this.top.value
        this.top = this.top.next
        this.length--
        return value
    }

    peek(){
        return this.top ? this.top.value : null
    }

    isEmpty(){
        return this.top == null
    }

    size(){
        return this.length
    }
}