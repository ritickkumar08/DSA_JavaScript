class Solution {
    concatenate(nums) {
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            nums[n + i] = nums[i]
        }
        return nums
    }
}

const nums = [1,2,3,4]
const ob = new Solution();
console.log(ob.concatenate(nums));
