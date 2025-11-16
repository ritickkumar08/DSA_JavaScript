function power(x,n){
    if(n == 0){
        return 1;
    }
    let ponm1 = power(x,n-1)
    let toa = x * ponm1;
    return toa
}

console.log(power(2,5));

function power1(x,n){
    if(n == 0){
        return 1;
    }

    if(n%2 == 0){
        let ans = power(x, Math.floor(n/2))
        return ans * ans
    }else{
         let ans = power(x, Math.floor(n/2))
         return ans * ans * x
    }    
}
console.log(power1(2,5));