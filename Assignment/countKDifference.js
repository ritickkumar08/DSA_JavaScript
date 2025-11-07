var countKDifference = function(nums, k) {
    let map = new Map();
    let count = 0;

    for(let i = 0 ; i < nums.length ; i++){
       if(map.has(nums[i] - k)) count += map.get(nums[i] - k); //we know that a - b = +-target, because we have to check for 
       //absolute value. now the formula can be written as b = a +- target and as we cant check for both
       //"+" and "-" at once so we check for the other condition in the next line
       if(map.has(nums[i] + k)) count += map.get(nums[i] + k);

       map.set(nums[i], (map.get(nums[i]) || 0) + 1);//if the above conditions fails that implies the element is seen for the
       //first time and so we will have to increment count by 1.
    }
    return count
};



var countKDifference1 = function(nums, k) {
    // let map = new Map();
    let count = 0;

    for(let i = 0 ; i < nums.length ; i++){
        // let number = Math.abs(k + nums[i]);
        for(let j = i + 1 ; j < nums.length ; j++){
            if( Math.abs(nums[i] - nums[j]) == k){
                count++;
            }
        }
    }
    return count
};
let nums = [1,2,2,1], k = 1
console.log((countKDifference(nums,1)));