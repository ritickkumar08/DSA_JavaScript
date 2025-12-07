// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Definition for singly-linked list.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
class stack{
    constructor(){
        this.str = []
    }
    push(value){
        this.str.push(value)
    }
    pop(){
        if(this.str.length === 0) return -1
        return this.str.pop()
    }
    top(){
        if(this.str.length === 0) return -1
        return this.str[this.str.length - 1]
    }
    isEpmty(){
        return this.str.length === 0
    }
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function(head) {
    let st = new stack()
    let current = head
    while(current !== null){
        st.push(current.value)
        current = current.next
    }

    current = head
    while(current !== null){
        if(current.val !== st.pop()){
            return false
        }
        current = current.next
    }

    return st.isEpmty()
};

console.log(isPalindrome(sta))


var isPalindrome = function(head) {
    let fast = head
    let slow = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next //fast will jump two steps at a time, so that the slow stops at the mid point of the given linkedlist
    }
    
    //now we will reverse the linkedlist from the point at which the slow pointer stopped.
    let right = reverse(slow)

    //assigning left the head, the begining of the linked list 
    let left = head

    while(right){
        if(left.val !== right.val) return false
        left = left.next
        right = right.next
    }
    return true
};

function reverse(head) {
    let previous = null
    let current = head

    //logic to reverse a linkedlist
    while(current){
        let next = current.next //we are storing the next of the current element in a variable,
        //so that it can become the next current node
        current.next = previous //here we are reversing the link established.
        previous = current //updating the previous node
        current = next //updating the current node
    }
    return previous
}



