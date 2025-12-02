var removeNthFromEnd = function(head, n) {
    let size = 0;
    for(let i = head ; i != null ; i = i.next){
        size++;
    }
    let indexToRemove = size - n;
    let current = head
    let i = 0;
    while(i < indexToRemove){
        current = current.next;
        i++;
    }
    
    return head
};