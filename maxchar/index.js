// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // without using map collection, but same concept key, value
    let max = 0
    let char_max = ''
    const charMap = {}
    for(let x of str){

        if(charMap[x]){
            charMap[x]++
        }else{
            charMap[x] = 1
        }
    }

    for(let y in charMap){  //***This is how you iterate an object "in" not "of" ***
      if(charMap[y] > max){ // If value of that key is greater than global max than       
        max = charMap[y]    // assign it to the max and return that key
        char_max = y
      }

    }   
    return char_max
}

module.exports = maxChar;

/*  using maps collection

let max_char = ''
    let max = 0
    let map = new Map()

    for (let i =0; i < str.length ; i++){

        if( map.has(str[i])){
            let value = map.get(str[i])
            map.set(str[i],value + 1)
        }
        else {
            map.set(str[i],1)
        }
    }

    for (let values of map.keys()){
        if(map.get(values) >= max){
            max_char = values
            max = map.get(values)
        }
    }
 return max_char
*/