function nam(i,n) {
    if(Math.floor(n/i < 2)){
        return
    }

    nam(i+1, n-3)
    console.log(i,n);
    
}
nam(3,20)