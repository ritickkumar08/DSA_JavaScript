class Solution{
    linearSearch(nums,target){
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] == target){
                return true
            }
        }
        return false;
    }
}

const nums =[1,2,3,4,54,5,66,7,8,8,8,,5,4,32,,2,4,5]
const target = 3
const ob = new Solution()
console.log(ob.linearSearch(nums,target));
