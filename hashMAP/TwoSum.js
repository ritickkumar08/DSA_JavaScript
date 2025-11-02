var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        let number = target - nums[i] 
        if(map.has(number)){
            return [map.get(number) , i]
        }map.set(nums[i] , i);
    }
};

var twoSum1 = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            if((nums[i] + nums [j]) == target){
                return [i,j]
            }
        }
    }
};

let nums = [2,7,11,15] 
let target = 9
console.log(twoSum1(nums,target))


//wrong  
// var twoSum2 = function(nums, target) {
//     let i = 0 ;
//     for(let j = i + 1; j < nums.length ; j++){
//         if(nums[i] + nums[j] == target){
//             return [i,j];
//         }else i++
//     }
// };
// let nums1 = [2,7,11,15] 
// let target1 = 9
// console.log(twoSum2(nums1,target1))
