class StackUsingQueue{
    constructor(){
        this.q = []
    }

    push(value){
        this.q.push(value)


        let rotation = this.q.length()
        // while(rotation--){
        //     this.q.push(this.q.shift())
        // }
        for(let i = 0 ; i < rotation ; i++){
            this.q.push(this.q[i])
            this.q.shift()
        }
    }

    pop(){
        const element = this.q[0]
        this.q.shift()
        return element
    }
}

