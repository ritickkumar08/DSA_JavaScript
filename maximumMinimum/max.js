const arr = [2,10,9,5,1]
function maxMin(arr) {
    let max = 0
    let min = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < arr[min]){
        min = i
    }
    if(arr[i] > arr[max]){
        max = i
    }
    }   
    return [arr[min] , arr[max]]
}

console.log(maxMin(arr));
