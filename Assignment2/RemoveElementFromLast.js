var removeNthFromEnd = function(head, n) {
    if(!head) return null

    //calculating the size of the given linkedList.
    let size = 0;
    for(let i = head ; i != null ; i = i.next){
        size++;
    }

    //if the size is equal to the given index or n then remove the head itself
    if(size == n){
        head = head.next
        return head
    }
    
    let indexToRemove = size - n;
    let current = head
    let i = 0;
    while(i < indexToRemove){
        current = current.next;
        i++;
    }

    //deleting the nth node by pointing the (n-1)th node to the next of nth node.
    if(current.next){
        current.next = current.next.next
    }
    
    return head
};

// —----------------------------------------------------------------------------------------------------------------------------

var removeNthFromEnd = function(head, n) {
    let dummy = new Node(0)
    dummy.next = head

    let fast = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    let slow = dummy;
    while(fast !== null && fast.next !== null){
        fast = fast.next
        slow = slow.next
    }

    if(slow.next){
        slow.next = slow.next.next
    }

    return dummy.next
};