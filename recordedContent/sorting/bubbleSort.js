class Solution{
    bubbleSort(nums){

        let swapped = false
        for(let i = 0 ; i < nums.length ; i++){
            for(let j = 1 ; j < nums.length - i ; j++){
                if(nums[j] < nums[j-1]){
                    this.swap(nums,j,j-1)
                    swapped = true
                }
            }
            if(!swapped){
                break
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
console.log(ob.bubbleSort(nums));
