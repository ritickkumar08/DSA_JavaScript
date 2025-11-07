class Solution{
    selectionSort(nums){
     
        for (let i = 0; i < nums.length; i++) {
            let minIndex = i
            for(let j = i + 1 ; j < nums.length ; j++){
                if(nums[minIndex] > nums[j]){
                    minIndex = j
                }
            }
            if(minIndex != i){
                this.swap(nums,minIndex,i)
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
console.log(ob.selectionSort(nums));
