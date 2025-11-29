function hehe(a,b=1) {
    return a+b
}

console.log(hehe(20,30));

function hehehe(...a) {
    let sum = 0
    for(let value of a){
        sum += value
    }
    return sum
}

const arr = [1,2,3,4,5]
console.log(hehehe(...arr));
