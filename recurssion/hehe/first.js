function recurssion(i) {
    if(i >= 4){
        return
    }
    console.log(i);
    recurssion(i + 1)
}
recurssion(1)