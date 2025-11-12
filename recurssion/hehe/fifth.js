function fifth(i,t) {
    if(i > 6 || t < 3){
        return
    }
    fifth(i + 2, t - 4)
    console.log(i);
    fifth(i + 3 ,t -5)
    console.log(t);
    
}
fifth(1,9)