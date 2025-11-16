function fibonacci(n){
    if(n == 0 || n == 1){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(4));
function print(n) {
    for(let i = 0 ; i < n ; i++){
        console.log(fibonacci(i))
    }
}
print(4)