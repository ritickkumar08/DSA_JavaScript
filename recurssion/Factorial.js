var factorial = function(num){
    if(num == 1 || num == 0){
        return 1
    }
    return num * factorial(num - 1)
}

let num = 5
console.log(factorial(num));
