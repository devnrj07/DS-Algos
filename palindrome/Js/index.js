// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
 
    str.split('').every((char,i) => {
        return char === str[str.length - i -1];
    });
    
    
}

// using recursion



//Using every() helper method
// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
//It returns a Boolean value. arr.every(callback(element[, index[, array]])[, thisArg])
/* 
   double checking the every element 


*/
 

//Using string Reversal and comparing it with original string
// let reverseStr = str.split('').reduce((rev,char)=> char + rev,'');
//     return reverseStr === str ;


module.exports = palindrome;
