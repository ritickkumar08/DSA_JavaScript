//Reverse bits of a given 32 bits signed integer.

// Example 1:
// Input: n = 43261596
// Output: 964176192
// Explanation:
// Integer	Binary
// 43261596	00000010100101000001111010011100
// 964176192	00111001011110000010100101000000

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let reverse = 0;
    for(let i = 0 ; i < 32 ; i++){
        reverse = (reverse << 1) | (n & 1);//here we rigth shift the reverse by 1 bit and then find the 
        //least significant bit for the number in bits and the bitwise or them to get the binary digit to be
        //added in the resultant reversed number.
        n = n >> 1;
    }
    return reverse;
};
let n = 43261596
console.log(reverseBits(n));
