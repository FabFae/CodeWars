// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
 
    
    
function makeString(s){
    // separate string into words
    const words = s.split(' ')
    // collect all the first letters in an array
    let fst = []
    for(const word of words){
      const letters  = word.split('')
      fst.push(letters[0])
    }
    // return collected letters as a single string
    return(fst.join(''))
  }
  