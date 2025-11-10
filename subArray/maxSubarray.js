class Solution {
    maxSubarraySum(arr, k) {
        // code here
        let i = 0 ; 
        let j = 0 ;
        let maxSum = 0 ;
        let sum = 0;
        
        while(j < arr.length){
            sum += arr[j];
            
            if(j-i+1 < k){
                j++;
            }else if(j-i+1 == k){
                if(sum > maxSum){
                    maxSum = sum
                }
                sum = sum - arr[i];
                i++;
                j++;
            }
        }
        return maxSum;
    }
}

const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20]
const k = 4
const ob = new Solution()
console.log(ob.maxSubarraySum(nums,k));


var maxSubArray = function(nums,k){
    let maxSum = 0
    for (let i = 0; i < nums.length - k; i++) {
        let sum = 0;
      for (let j = i; j < i + k; j++){
        sum += nums[j]
      }   
      maxSum = Math.max(sum, maxSum)     
    }
    return maxSum
}
const nums1 = [-2,1,-3,4,-1,2,1,-5,4]
let k1 = 4
console.log(maxSubArray(nums1,k1));
