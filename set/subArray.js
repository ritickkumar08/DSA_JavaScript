class Solution {
    // Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr) {
        // code here
        let mySet = new Set();
        let sum = 0;
        for(let i = 0 ; i < arr.length ; i++){
            sum += arr[i];
            if(mySet.has(sum) || sum === 0){
                return true;
            }else{
                mySet.add(sum)
            }
        }  
        return false     
    }
}

class Solution1 {
    // Function to check whether there is a subarray present with 0-sum or not.
   subArrayExists(arr) {
        // code here
        let set = new Set();
        let s = 0;
        for(let i = 0; i<arr.length; i++){
            s = s+arr[i];
            if(set.has(s) == false)
            set.add(s);
            else
            return true;
        }
        
        return false;
    }
}