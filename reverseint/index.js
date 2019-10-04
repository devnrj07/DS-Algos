// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = 0

    if(n<0) { n*=-1
                }

    while(n>0){

       reversed = reversed * 10 + n%10
       n/=10

    }
    if (n < 0) {
        reversed *= -1
    }

   return reversed
}

module.exports = reverseInt;

/* 
 let rev =0
   while (n){
    
    rev = rev*10+n%10
    n=n/10
}
return rev * Math.sign(rev)

*/

/* let rev =0
   rev = parseInt(n.toString().split('').reverse().join(''))
    
  return rev* Math.sign(n)
  */
