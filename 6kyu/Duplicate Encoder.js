// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c


function duplicateEncode(word){
    let returnString = ''
    for(const letter of word){
      let counter = 0
      for (const other of word) other.toLowerCase() === letter.toLowerCase() ? counter++ : {}        
      counter === 1 ? returnString += "(" : returnString += ")"   
    }
      return returnString;
  }
  