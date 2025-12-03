// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.
// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.



var removeDuplicates = function(nums) {

    let index = 1
    // let count = 0
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] != nums[i-1]){
            nums[index++] = nums[i];           
        }       
   }
    return index
};

nums = [1,1,2]
console.log(removeDuplicates1(nums));
// console.log(nums)

function removeDuplicates1(nums) {
        // code here
    let index = 0
    let newArr = []
    for(let i = 0 ; i < nums.length - 1 ; i++){
        if(nums[i] != nums[i+1]){
            newArr[index++] = nums[i];           
        }       
    }
    return newArr
}