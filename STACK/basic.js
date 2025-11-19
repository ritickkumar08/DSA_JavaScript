//array implementation on stack
class Stack{
    constructor(){
        this.stackArr = []
    }

    push(element){
        this.stackArr.push(element)
    }

    pop(){
        if(this.isEmpty()) return -1
        return this.stackArr.pop()
    }

    peek(){
        if(this.isEmpty()) return -1
        return this.stackArr[this.stackArr.length - 1]
    }

    isEmpty(){
        return this.stackArr.length === 0
    }

    size(){
        return this.stackArr.length
    }
}

const st = new Stack()
st.push(4)
st.push(5)
st.push(10)
st.push(50)
console.log(st);
console.log(st.peek());
const poped = st.pop()
console.log(poped);
console.log(st);




