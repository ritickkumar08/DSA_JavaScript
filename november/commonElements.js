var findIntersectionValues = function(nums1, nums2) {
    let answer1 = 0;
    let answer2 = 0;
    for(let i = 0 ; i < nums1.length ; i++){
        for(let j = 0 ; j < nums2.length ; j++){
            if(nums1[i] == nums2[j]){
                answer1++;
                break;
            }
        }
    }
    for(let i = 0 ; i < nums2.length ; i++){
        for(let j = 0 ; j < nums1.length ; j++){
            if(nums2[i] == nums1[j]){
                answer2++;
                break;
            }
        }
    }
    return [answer1,answer2]
};

let nums1 = [4,3,2,3,1]
let nums2 = [2,2,5,2,3,6]
console.log(findIntersectionValues(nums1,nums2));



// ==================or==========================
var findIntersectionValues1 = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let answer1 = 0;
    let answer2 = 0;
    
  for (const value of nums1) {
    if(set2.has(value)){
        answer1++
    }
  }
  for (const value of nums2) {
    if(set1.has(value)){
        answer2++
    }
  }

    return [answer1,answer2]
};
let nums = [4,3,2,3,1]
let nums3 = [2,2,5,2,3,6]
console.log(findIntersectionValues1(nums,nums3));