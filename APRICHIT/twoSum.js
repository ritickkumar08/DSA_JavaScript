// Given an array arr[] of integers and another integer target. Determine if there exist two distinct 
// indices such that the sum of their elements is equal to the target.
// Examples:
// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true
// Explanation: arr[3] + arr[4] = -3 + 1 = -2

// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: None of the pair makes a sum of 0

// Input: arr[] = [11], target = 11
// Output: false
// Explanation: No pair is possible as only one element is present in arr[]

class Solution1 {
    twoSum(arr, target) {
        // code here
        for(let i = 0; i < arr.length; i++){
            let complement = target - arr[i]
            for(let j = i+1; j < arr.length; j++){
                if(arr[j] == complement){
                    return true
                }
            }
        }
        return false
    }
}

class Solution {
    twoSum(arr, target) {
        // code here
        let map = new Map()
        for(let i = 0; i < arr.length; i++){
            let complement = target - arr[i]
            if(map.has(complement)) return true

            map.set(arr[i],i)
        }
        return false
    }
}



const arr = [0, -1, 2, -3, 1]
let target = 5
const ob = new Solution()
console.log(ob.twoSum(arr,target));
