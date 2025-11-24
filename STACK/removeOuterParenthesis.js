// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings,
// and + represents string concatenation.
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B,
// with A and B nonempty valid parentheses strings.
// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk,
// where Pi are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:
// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

class Stack{
    constructor(){
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    pop(){
        // if(this.stack.isEmpty()) return -1
        return this.stack.pop()
    }
    peak(){
        // if(this.isEmpty()) return -1
        return this.stack[this.stack.length - 1]
    }
    isEmpty(){
        return (this.stack.length === 0)
    }
    length(){
        return this.stack.length
    }
}


var removeOuterParentheses = function(s) {
    const stack = new Stack();
    let newStr = '';
    for(let i = 0 ; i < s.length ; i++){
        let ch = s.charAt(i)
        if(ch == '('){

            // Only add '(' if we're not at the outermost level
            if(stack.length() > 0){
                newStr += ch
            }
            stack.push(ch)
        }else {// We're seeing ')'
            stack.pop() // pop first because depth decreases

            if(stack.length() > 0){  // Only add ')' if we're not at the outermost level
                newStr += ch
            }
        }
    }
    return newStr;
};

var removeOuterParentheses1 = function(s) {
    let depth = 0
    let newStr = ""

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == '('){
            if(depth > 0) newStr += s[i]
            depth++
        }else{
             depth --
            if(depth > 0) newStr += s[i]
        }
    }
    return newStr
};


const result = removeOuterParentheses("(()())(())")
console.log(result);

const result1 = removeOuterParentheses1("(()())(())")
console.log(result1);
