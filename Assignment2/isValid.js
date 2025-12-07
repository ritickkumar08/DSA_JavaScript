class Stack{
    constructor(){
        this.st = []
    }
    push(value){
        this.st.push(value)
    }
    pop(){
        if(this.st.length == 0) return null

        let value = this.st[this.st.length - 1];
        this.st.pop()
        return value;
    }
    top(){
        if(this.st.length == 0) return null

        let value = this.st[this.st.length - 1];
        return value;
    }
    isEmpty(){
        return (this.st.length === 0)
    }
}

var isValid = function(s) {
    const st = new Stack(); //creating a stack to push the characters of the string

   for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i)
        if(ch == '(' || ch == '{' || ch == '['){
            st.push(ch)
            continue //The continue sends control to the next iteration of the loop immediately, avoiding all the further 
            //conditions check.
        } 
        //if the string starts with the closing parentheses, that implies stack will be empty
        if(st.isEmpty()){
            return false
        }
        
        //check for the opening pairs of the closing parentheses found
        if(ch == ')' && st.top() == '(') st.pop()
        else if(ch == ']' && st.top() == '[') st.pop()
        else if(ch == '}' && st.top() == '{') st.pop()
        else return false   
   }
   return st.isEmpty()
};

const string = "(){}[]"
console.log(isValid(string));


