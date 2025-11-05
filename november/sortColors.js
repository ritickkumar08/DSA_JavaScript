var sortColors = function(nums) {
    let start = 0; 
    let end = nums.length - 1;
    let mid = 0;
    while(mid <= end){
        if(nums[mid] == 2){
            swap(nums, mid, end)
            end--;
        }else if(nums[mid] == 0){
            swap(nums, mid, start)
            mid++
            start++
        }else{
            mid++
        }
    }
    return nums
};
function swap(nums, first, second) {
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp
}

let nums = [2,0,2,1,1,0]
console.log(sortColors(nums));
