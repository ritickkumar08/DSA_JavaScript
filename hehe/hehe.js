function first() {
    console.log("hello");
    Second()
}
function Second() {
    console.log("hi");
}



(function Ritick(name) {
    console.log("ritick1");   
})("ritick")


let result = (function(a,b){
    return a * b
})(5,20)
console.log(result);


let counter = function () {
    let count = 0

    return{
        increment : function () {
            count ++
            return count
        },
        decrement : function () {
            return count --
        }
    }
}

console.log(counter.increment);
console.log(counter.increment);
console.log(counter.decrement);

