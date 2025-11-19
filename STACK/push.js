const stackArr = new Array(5)
let top = -1
const length = stackArr.length

function push(item) {
    top++
    if(top > length - 1){
        console.log("overflow");
        return false
    }
    stackArr[top] = item

    return true
}
push(4)
push("ritick")
push("ritick")
push("ritick")
push("ritick")

console.log(stackArr);

function pop() {
    if(top == -1) return -1
    if(top < -1){
        console.log("underflow");
        return false
    }
    const poped = stackArr[top]
    top--
    return poped
}
pop()
console.log(stackArr);
console.log(top);

