
// Definition for singly-linked list.
function ListNode(val) {
   this.val = val;
   this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    for(let i = headA ; i != null ; i = i.next){
        for (let j = headB; j != null ; j = j.next) {
            if(i = j){
                return i
            }
        }
    }
    return null
};

var getIntersectionNode1 = function(headA, headB) {
    const set = new Set()
    for(let i = headA ; i != null ; i = i.next){
        set.add(i)
    }

    for (let i = headB; i != null ; i = i.next) {
       if(set.has(i)){
        return i
       }
    }

    return null
};


var getIntersectionNode3 = function(headA, headB) {

    //counting the length of the linkedlists
   let count1 = 0
    for(let i = headA ; i != null ; i = i.next){
       count1++
    }
    let count2 = 0
    for(let i = headB ; i != null ; i = i.next){
       count2++
    }

    //getting the difference of the length of the lists
    let diff = Math.abs(count1 - count2)

    //moving the greater one to equalise the length 
    let current1 = headA
    let current2 = headB
    if(count1 > count2){
        while(diff > 0){
            current1 = current1.next
            diff--
        }
    }else{
        while(diff > 0){
            current2 = current2.next
            diff--
        }
    }

    // Moveing both pointers until they meet or end
    while (current1 && current2) {
        if (current1 === current2) return current1;
        current1 = current1.next;
        current2 = current2.next;
    }

    return null
};