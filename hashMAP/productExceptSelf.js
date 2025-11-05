//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
nums = [1,2,3,4]

// var productExceptSelf = function(nums) {
//     let newArr = [];
//     for(let i = 0 ; i < nums.length ; i++){
//         let product = 1 ;
//         for(let j = 0 ; j < nums.length ; j++){
//             if(j == i){
//                 continue;
//             }else{
//                 product *= nums[j];
//             }
//         }
//         newArr.push(product);
//     }
//     return newArr;
// };
// console.log(productExceptSelf(nums));


//better solution .
var productExceptSelf1 = function(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    // we will first add the prefix product values to the output array.
    let prefix = 1;
    for (let i = 0; i < n; i++) { 
        output[i] = prefix //this holds the prefix product values
        prefix *= nums[i];
    }

    //now, as we have prefix product values inside or output array, we just have to find the suffix values for the
    //elements of the nums array and then find their product with there respective indexed element in the output
    //array.
    let suffix = 1;
    for (let i = n - 1; i >= 0 ; i--) {
        output[i] *= suffix;
        suffix *= nums[i]
    }

    return output
}
console.log(productExceptSelf1(nums));


 