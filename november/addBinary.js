// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
var addBinary = function(a, b) {
    let result = [];
    let lenA = a.length - 1;
    let lenB = b.length - 1;
    let carry = 0;

    while(lenA >= 0 || lenB >= 0 || carry > 0){
        let sum = carry;

        if(lenA >= 0) sum += a.charAt(lenA--) - '0';
        if(lenB >= 0) sum += b.charAt(lenB--) - '0';

        result.push(sum % 2);
        carry = Math.floor(sum / 2); // because javascript dont have a specific data type so it will take fractional parts into consideration 
        //and so we have to manually floor it.
    }

    return result.reverse().join("") // we have to reverse the result first as reverse() is a function for arrays and not a string.
}

const a = "11" 
const b = "1"
console.log(addBinary(a,b));
