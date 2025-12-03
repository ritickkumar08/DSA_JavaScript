// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, 
// where d is a positive integer. Do the mentioned change in the array in place.
// Note: Consider the array as circular.
// Examples :

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.

// Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.

// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
        let n = arr.length//length of the given array
        d = d % n
        console.log(n);
        let temp = new Array(d)
        for (let i = 0; i < d; i++) {
            temp[i] = arr[i]
        }
        for (let i = 0; i < n - d; i++) {
            arr[i] = arr[i+d];
        }
        for(let i = 0; i < temp.length; i++){
            arr[n - d + i] = temp[i];
        }

        return(arr)
    }
}
const arr = [10]
let d = 101
const ob = new Solution()
console.log(ob.rotateArr(arr,d))
// console.log(ob.rotateArr(10,101))

