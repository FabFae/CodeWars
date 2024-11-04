// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
    //TODO Have fun :)
    const words = string.split(' ')
    newString = ''
    
    numWords = words.length
    
    for (let i = 0; i < numWords; i++){
      let word = words[i]
      if (word.length > 4){
        newString += revert(word)
      }
      else{
        newString += word
      }   
  
      newString += ' '
      
      
    }
    return newString.substring(0,newString.length -1)
  
  }
  
  function revert(string){
      let newString = ''
    
    for(let i = 0; i < string.length; i++){
      
      newString += string.charAt(string.length - i - 1)
    }  
    console.log(newString)
    return newString  
  }