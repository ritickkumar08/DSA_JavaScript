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
var isPalindrome = function(head) {
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

let head = 

console.log(isPalindrome(sta))