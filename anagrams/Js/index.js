// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const aSortedClean = clean_sort(stringA)
    const bSortedClean = clean_sort(stringB)

return aSortedClean === bSortedClean  //very easy way to compare two objects/strings in js
}

//write a function to clean it (remove spaces, punctutation ) and sort it
function clean_sort(str){

    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}
module.exports = anagrams;

  /*
  
   const aMap = mapBuilder(stringA)
    const bMap = mapBuilder(stringB)

    //comparing the number of keys in both charMaps
    if(Object.keys(aMap).length != Object.keys(bMap).length){
        return false
    }

    //comparing the values of keys in both charMaps
    for( let x in aMap){
        if(aMap[x] != bMap[x]){
            return false
        }
    }
return true
}


// helper fucntion to create a MAP
function mapBuilder(string){

    const charMap= {}
    for (let x of string.replace(/[^\w]/g,"").toLowerCase()){
    
        charMap[x] = charMap + 1 || 1
    }
return charMap
}
  
  */