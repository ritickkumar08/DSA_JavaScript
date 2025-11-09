// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

var numIdenticalPairs1 = function(nums) {
    let count = 0;
    for(let i = 0 ; i < nums.length ; i++){
        for (let j = i + 1 ; j < nums.length; j++) {
            if(nums[j] == nums[i]){
                count++
            }
        }
    }
    return count
};
 
 
var numIdenticalPairs = function(nums) {
    const map = new Map();
    let count = 0;
    for(let num of nums){
       if(map.has(num)) count += map.get(num) // checking if the map contains the num and if it does then 
       //we get the value of the num in map which is the count of the element, and then we add it to the count variable.

        map.set(num, (map.get(num) || 0) + 1) // we are setting the element as key and its count as the value.
    }
    return count
};
const nums = [1,2,3,1,1,3]
console.log(numIdenticalPairs(nums));