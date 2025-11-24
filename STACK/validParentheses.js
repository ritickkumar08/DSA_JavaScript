// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    const st = new Stack()
    for(let i = 0 ; i < s.length ; i++){
        let ch = s.charAt(i)
        if(ch == '(' || ch == '[' || ch == '{'){
            st.push(ch)
        }
        //if the stack is empty here that implies the string starts with closing brackets. 
        if(st.isEmpty()){
            return false
        }
        
        //checking for the closing brackets.
        if(ch == ')' && st.peek() == '('){
            st.pop()
        }else if(ch == ']' && st.peek() == '['){
            st.pop()
        }else if(ch == '}' && st.peek() == '{'){
            st.pop()
        }else{
            return false
        }
    }
    return st.isEmpty();
};