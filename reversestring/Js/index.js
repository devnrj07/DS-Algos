// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    reversed = ''
    if(str<2) return str;
    
    return reverse(str.substring(1)) + str.charAt(0);
}

//using a built in method to first convert str into array then using reverse method of array finally joining it back to make a str
//return str.slice('').reverse().join('');

//Another solution using extra storage
//let reversed = '';

//  for( let x of str){
//      reversed=x+reversed; // adding reverse order
// }
//  return reversed;


// // using advanced array helper reduce (to impress interviewer)
// reduce() : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//            -  method reduces the array to a single value.
//            -  method executes a provided function for each value of the array (from left-right).
//            - The return value of the function is stored in an accumulator (result/total)

//     so, here we have total i.e reversed string and currentValue(each element) as a character
//     since we want to reverse it we will acculmulate the value from right to left in array hence char + rev
//     return str.split('').reduce((reversed, character) => character + reversed, '');

//using recursion more or less like reduce



module.exports = reverse;
