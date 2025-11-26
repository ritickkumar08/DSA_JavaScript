//trying to implement stack but we have a queue data structure with us

//approach 1 :- using two queues and overloading or push operation.
class StackUsingQueue{
    constructor(){
        this.q1 = []
        this.q2 = []
    }

    push(value){
       this.q2.push(value)

       while(this.q1.length != 0){
        this.q2.push(this.q1[0])
        this.q1.shift()
       }

       this.q = this.q1
       this.q1 = this.q2
       this.q2 = this.q
    }

    pop(){
        const element = this.q1[0]
        this.q1.shift();
        return element
    }

    top(){
        const element = this.q1[0]
        return element
    }

    printElement(){
        for (let i = 0; i < this.q1.length; i++) {
            console.log(this.q1[i]);     
        }
    }
}

const st = new StackUsingQueue()
st.push(1)
st.push(2)
st.push(3)
st.push(4)

st.pop()
st.printElement()
