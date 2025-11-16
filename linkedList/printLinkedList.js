class Solution {
    printList(head) {
        // code here
        let ans = []
        for(let i = head; i != null ; i = i.next){
            ans.push(i.data)
        }
        return ans
    }
}

