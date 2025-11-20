//LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}


/**
 * @param {Node} head
 * @return {number}
 */

class Solution {
    GetNth(head, index) {
        // Code Here
       let i = 1 //starting from 1 because the questions does it so
       let current = head
       while(i < index){ //as we are restricting the while loop to loop for given
       //index number of times and that we started from 1 and that 1 was already 
       //occupied by pointing to head for current.
           if(current.next == null){
               return -1 // if the index given is greater than the number of elements
               //in the list, return -1 to signify that.
           }
           current = current.next //otherwise keep updating current for the next node
           i++
       }
       
       return current.data
    }
}