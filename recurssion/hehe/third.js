function name1(i,n) {
    if(i < n){
        return
    }
    console.log(n);
    name1(i-5,n+2)
    console.log(i);
    
    
}
name1(10,-3)