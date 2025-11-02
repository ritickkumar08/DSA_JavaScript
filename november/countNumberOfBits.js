// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
// Example 1:
// Input: n = 11
// Output: 3
// Explanation:
// The input binary string 1011 has a total of three set bits.
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n > 0){
        if((n & 1) == 1){//this is bitwise and it gives us the value of the least significant bit.
            count++;
        }n = n >> 1; //this is left shift operator and it shifts the binary conversion of a number towards left, thereby eliminating the least significant bit.
    }
    return count;
};