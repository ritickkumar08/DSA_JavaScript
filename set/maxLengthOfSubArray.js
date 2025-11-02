class Solution {
    maxLength(arr) {
        // code here
        let myMap = new Map();
        let sum = 0;
        let maxLength = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (sum === 0) {
                maxLength = i + 1;
            }
            
            if (myMap.has(sum)) {
                maxLength = Math.max(maxLength,i - myMap.get(sum))
            } else {
                myMap.set(sum, i)
            }
        }
        return maxLength
    }
}

const ob = new Solution()
console.log(ob.maxLength([15, -2, 2, -8, 1, 7, 10, 23]))