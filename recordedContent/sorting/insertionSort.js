class Solution{
    insertionSort(nums){
        for (let i = 0; i < nums.length - 1; i++) {
             for(let j = i + 1 ; j >= 0 ; j--){
                if(nums[j] < nums[j-1]){
                    this.swap(nums, j , j - 1)
                }else{
                    break;
                }
             }
        }
        return nums
    }
    swap(nums,first,second){
        let temp = nums[first]
        nums[first] = nums[second]
        nums[second] = temp
    }
}

const ob = new Solution()
const nums = [2,3,4,1,5,6,2]
console.log(ob.insertionSort(nums));
