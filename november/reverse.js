function reverseArray(nums) {
    let i = 0;
    let j = nums.length - 1;

    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

        i++
        j--
    }
    return nums
}

let nums = [1,2,3,4,5,6,7]
console.log(reverseArray(nums));


function isPalindrome(nums) {
    let i = 0;
    let j = nums.length - 1;

    while(i < j){
        if(nums[i] != nums[j]){
            return false;
        }
        i++
        j--
    }
    return true
}
let nums1 = [1,2,1]
console.log(isPalindrome(nums));
console.log(isPalindrome(nums1));

