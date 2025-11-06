//Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the
//result of the evaluation. Note: You are not allowed to use any built-in function which evaluates strings
//as mathematical expressions, such as eval().
//Example 1:
//
//Input: s = "1 + 1"
//Output: 2
//Example 2:
//
//Input: s = " 2-1 + 2 "
//Output: 3
//Example 3:
//
//Input: s = "(1+(4+5+2)-3)+(6+8)"
//Output: 23
var calculate = function(s) {
    const temp = []
    let currentNumber = 0
    let value = 0
    let sign = 1

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);

        if(Number.isFinite(c)){
            currentNumber = currentNumber * 10 + (c - '0')
        }else if(c == '+'){
            value += sign*currentNumber;
            currentNumber = 0;
            sign = 1;
        }else if(c == '-'){
            value += sign*currentNumber;
            currentNumber = 0;
            sign = -1;
        }else if(c == '('){
            temp.push(value);
            temp.push(sign);
            value = 0;
            sign = 1;
        }else if(c == ')'){
            value += sign*currentNumber;
            currentNumber = 0
            value *= temp.pop()
            value += temp.pop()
        }else{
            continue
        }
    }

    if(currentNumber != 0){
        value += sign*currentNumber;
    }

    return value
};