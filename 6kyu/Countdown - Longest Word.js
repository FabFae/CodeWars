// https://www.codewars.com/kata/57a4c85de298a795210002da


function longestWord(letters){  
    var returnWords = []
    // for every word in words 
    for(const word of words){
      let tmp = [...letters]
    // check if all letters or the word are in letters
      let isValide = true
      for (const letter of word){  
        if (tmp.includes(letter)){
          tmp.splice(tmp.indexOf(letter), 1)
        }else{
          isValide = false
          break
        }           
      }  
          
      //  if the word is valide, check if we found a new longest word (longer than before)
      if (isValide){
        // first check if there are any words in the array
        if (returnWords.length > 0){
          const longest = returnWords[0].length
          const current = word.length
          //  if length equal to longest, add it to return array
          if (current === longest) returnWords.push(word)
          // if current word is longer that replace the array with current word
          else if (current > longest){
            returnWords = [word]
          }           
        }
        // if the array is still empty
        else
        {
          returnWords.push(word)
        }
      }
    }      
    // return array of words or null
    return returnWords.length === 0 ? null : returnWords
  }
  
  