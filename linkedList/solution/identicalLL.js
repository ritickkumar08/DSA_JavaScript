class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head1 = new Node(1)
let node1 = new Node(2)
let node2 = new Node(3)
let node3 = new Node(4)
let node4 = new Node(5)
let node5 = new Node(6)
head1.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let head2 = new Node(1)
let element1 = new Node(2)
let element2 = new Node(3)
let element3 = new Node(4)
let element4 = new Node(5)
let element5 = new Node(6)
head2.next = element1
element1.next = element2
element2.next = element3
element3.next = element4
element4.next = element5


class Solution {
    areIdentical(head1, head2) {
        //  code here
        let i = head1 //assigning the head to a variable for easy access
        let j = head2
        while(i !== null && j !== null){ //run the loop till they both exists if one ends then 
        //stop the execution
            if(i.data !== j.data){ //check at each step if the data is equal to the other list data
                return false
            }
            i = i.next;
            j = j.next;
        }
        return i === null && j === null;//checking if both the lists ended at null/
        //if not that implies there are some more node in either of loop making them unequal
    }
}


const ob = new Solution()
console.log(ob.areIdentical(head1,head2));
