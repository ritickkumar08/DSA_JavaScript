class Queue{
    constructor(){
        this.arr = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element){
        this.arr[this.rear] = element
        this.rear++
    }

    dequeue(){
        if(this.isEmpty()) return null

        let value = this.arr[this.front]
        this.front++
        return value
    }

    peek(){
        if(this.isEmpty()) return null

        let value = this.arr[this.front]
        return value
    }

    isEmpty(){
        if(this.front === this.rear) return true
    }

    size(){
        return this.rear - this.front;
    }

    printElements(){
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.arr[i]);          
        }
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

// console.log(q.dequeue()); // 10
// console.log(q.peek());    // 20
// console.log(q.size());    // 2

q.printElements()