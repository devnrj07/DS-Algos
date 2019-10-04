// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // simple hack to capitalize first character of a string
    let words = str[0].toUpperCase() // Here words is a string and not an array
    
    //Iterate through string and look to the left of each character 
    //wheather or not its a space ' ' if it is then -> capitalize the letter and add to the string
    // if not then just add to the string
    for (let i = 1 ; i < str.length ; i++){
        if(str[i-1] === ' ' ){
            words+=str[i].toUpperCase()
        }else {
            words+=str[i]
        }
    }
    return words
}

module.exports = capitalize;

/* using helper methods
const words = []

    for(let x of str.split(' ')){
     words.push(x[0].toUpperCase() + x.slice(1)) // converting first character than combining the remaining letters using slice
    }
    
    return words.join(' ')  */