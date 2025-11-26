class Queue{
    constructor(n){
        this.size = n
        this.arrQueue = new Array(this.size)
        this.front = 0
        this.rear = 0
    }
    enqueue(value){
       //checking if the quque is full or not
       if(this.rear == this.size-1){
            console.log("cannot push as queue is full");
            return
        }
        
        this.arrQueue[this.rear] = value
        this.rear++
        return
    }

    dequeue(){
        //check if the queue is empty
        if(this.isEmpty()){
            console.log('underflow');
            return null
        }

        let value = this.arrQueue[this.front]
        this.front++ 
        return value
    }

    isEmpty(){
        return this.rear === this.front
    }
    peek(){
        if(this.isEmpty()){
            console.log('underflow');
            return null
        }
        return this.arrQueue[this.front]
    }
    size(){
        return this.rear - this.front
    }

    printElements(){
        // if(this.front == -1 && this.rear == -1){
        //     console.log("empty queue");
        //     return
        // }
        for(let i = this.front ; i <= this.rear ; i++){
            console.log(this.arrQueue[i]);   
        }
    }

}

const queue = new Queue()
queue.enqueue(20)
queue.enqueue(9)
queue.enqueue(19)
queue.enqueue(29)
queue.enqueue(93)
queue.enqueue(94)
queue.enqueue(95)
queue.enqueue(96)
queue.dequeue()
queue.dequeue()
queue.printElements()
console.log(queue.dequeue());

