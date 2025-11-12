/**Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let i = 1;
    let sum = nums[0];
    let maxSum = nums[0];
    while(i < nums.length){
       if(sum < 0){
        sum = nums[i] //as we are starting from the element at the 0th index and we can have a negative number there so we will 
        //be better to start for a new subarray.
       }else{
        sum += nums[i] // if the abouve condition fails then just add the new element to the sum variable.
       }
       i++; // updating the index of the array

       maxSum = Math.max(sum, maxSum); //assigning the maximum value to the variable maxSum be it the new sum or the last subarray
       //sum.
    }
    return maxSum
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));
