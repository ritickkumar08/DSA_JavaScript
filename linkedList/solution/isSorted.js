class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head1 = new Node(10)
let node1 = new Node(20)
let node2 = new Node(30)
let node3 = new Node(40)
let node4 = new Node(50)
let node5 = new Node(60)
head1.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

class Solution {
    isSorted(head) {
        // code here
        if(!head || !head.next) return true

        //first we will check for ascending.
        let current = head
        let ascending = true //initialising the ascending to be true 
        while(current.next !== null){
            if(current.data > current.next.data){
                ascending = false //if the current data is greater than the next datathat implies the list don't follow
                // ascending order
                break; //if the above condition is true there is no use going on comparing next elements in the list so break
                //out of the loop
            }
            current = current.next //if the above condition is false keep on updating for the next element
        }
        if(ascending) return true //if till this line of code ascending is true then return true or check for the descending order

        //we will reset the current element to head to check for descending
        current = head
        let descending = true //initialising the descending to be true 
        while(current.next !== null){
            if(current.data < current.next.dat){
                descending = false
                break;
            }
            current = current.next
        }

        return descending; //lastly if the descending is false return false or vice versa
    }
}
const ob = new Solution()
let answer = ob.isSorted(head1)
console.log(answer);

