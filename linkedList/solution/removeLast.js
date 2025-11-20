class Solution {
    removeLastNode(head) {
        // code here
        if (!head) return null;          // empty list
        if (!head.next) return null;     // only one node → removing gives empty list

        let current = head
        while(current.next.next != null){
            current = current.next
        }
        current.next = null
        return head
    }
}