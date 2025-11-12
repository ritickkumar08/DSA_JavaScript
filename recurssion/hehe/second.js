function recurssion(i) {
    if(i <= 1){
        console.log(i);
        return
        console.log(i);
    }
    recurssion(i - 1)
    console.log(i);
    
}
recurssion(4)