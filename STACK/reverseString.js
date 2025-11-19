const str = "ritick"

class Stack {
    constructor(data) {
        this.top = -1
        this.size = data
        this.arr = new Array(this.size)
    }

    push(data) {
        if (this.top >= this.size - 1) {
            console.log("overflow");
            return
        }
        this.top++
        this.arr[this.top] = data
    }

    pop() {
        if (this.top < 0) {
            console.log("underflow");
            return
        }
        let x = this.arr[this.top]
        this.top--
        return x
    }
}

function reverse(str) {
    let length = str.length;
    let result = ''
    const st = new Stack(length);

    for (let i = 0; i < length; i++) {
        st.push(str.charAt(i))
    }
    for (let i = 0; i < length; i++) {
        result += st.pop()
    }
    return result
}
console.log(reverse(str));


