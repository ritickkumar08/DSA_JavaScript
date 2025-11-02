const arr = [2,10,4,3,5]

// function runningSum(arr) {
//     let newArr = [];
//     let sum = 0 ;
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += arr[i];
//         newArr.push(sum); //we are pushing the current value for the sum , so that we can get running sum of the values that are
//         //previous to the current index at which we are standing.
//     }
//    return newArr;
// }

// console.log(runningSum(arr));
 

// function sufixSum(arr) {
//     console.log('original array : ',arr);
//     let newArr = [];
//     let sum = 0
//     for(let i = arr.length-1 ; i >= 0 ; i--){
//         sum += arr[i]
//         newArr.push(sum)
//     }
//     return newArr.reverse();
// }
function sufixProduct(arr) {
    let newArr = [];
    let product = 1
    for(let i = arr.length-1 ; i >= 0 ; i--){
        product *= arr[i]
        newArr.push(product)
    }
    return newArr.reverse();
}
function prefixProduct(arr) {
    let newArr = [];
    let product = 1
    for(let i = 0 ; i < arr.length ; i++){
        product *= arr[i]
        newArr.push(product)
    }
    return newArr;
}

console.log(prefixProduct(arr));
console.log(sufixProduct(arr));
