class Stack{
    constructor(data){
        this.top = -1
        this.size = data
        this.arr = new Array(this.size)
    }
    push(data){
        if (this.top >= this.size - 1) {
            console.log("overflow");
            return
        }
        this.top++
        this.arr[this.top] = data
    }
    pop(){
        if(!this.top < 0) {
            console.log("underflow");
            return
        }
        let value = this.arr[this.top]
        this.top--
        return value
    }
    peek(){
        if(this.top < 0){
            console.log("null");
            return null
        }
        return this.arr[this.top]
    }
    isEmpty(){
        if(this.top <  0){
            return true
        }
        return false
    }
}

function nextGreater(nums) {
    let length = nums.length
    let newStack = new Stack(length)
    newStack.push(nums[0])

    for(let i = 1 ; i < length ; i++){
        if(newStack.isEmpty()){
            newStack.push(nums[i])
            continue
        }
        while(!newStack.isEmpty() && newStack.peek() < nums[i]){
            let value = newStack.pop()
            console.log(`${value} -> ${nums[i]}`);
        }
        newStack.push(nums[i])
    }
    while (!newStack.isEmpty()) {
        console.log(`${newStack.pop()} -> -1`);
        
    }
}
nextGreater([13,11,4,23])