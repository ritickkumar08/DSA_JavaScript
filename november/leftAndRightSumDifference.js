// //You are given a 0-indexed integer array nums of size n.

// Define two arrays leftSum and rightSum where:
// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, 
// leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element,
// rightSum[i] = 0.
// Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.
// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

var leftRightDifference = function(nums) {
    const output = []
    let prefixSum = 0  // variable to keep tracking the sum of all the elements before the index i.
    for (let i = 0; i < nums.length; i++) {
         output[i] = prefixSum // storeing the sum of the prefix elements.
         prefixSum += nums[i] //updatingt the prefix sum each time, for next index
    }

    let suffixSum = 0
    for(let i = nums.length - 1 ; i >= 0 ; i--){
        output[i] = Math.abs(output[i] - suffixSum) // as we know that now the output holds the sum of prefix elements so 
        // we just perform substractions on the suffix sum calculated.
        suffixSum += nums[i] // updating the suffix sum for each element
    }

    return output
};

const nums = [10,4,8,3]
console.log(leftRightDifference(nums));
