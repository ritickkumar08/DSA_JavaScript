class Solution {
    firstNegInt(arr, k) {
        // write code here
        let i = 0;
        let j = 0;
        let answer = []
        let negative = []

        while(j < arr.length){
            if(arr[j] < 0){
                negative.push(arr[j])
            }

            if(j - i + 1 < k){
                j++;
            }else if(j-i+1 == k){
                if(negative.length == 0){
                    answer.push(0)
                }else{
                    answer.push(negative[0])
                }
                if(negative[0] == arr[i]){
                negative.shift()
                }
                i++;
                j++;
                
            }           
        }
        return answer
    }
}

const arr= [12, -1, -7, 8, -15, 30, 16, 28] 
const k = 3
const ob = new Solution()
console.log(ob.firstNegInt(arr,k));
