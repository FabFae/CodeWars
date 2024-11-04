// https://www.codewars.com/kata/520b9d2ad5c005041100000f


function pigIt(str){
    //Code here
    const words = str.split(' ')  
    let newString = ''
    for(let word of words){
      if(letter(word)){
        newString += alternate(word)
      }
      else
      {
        newString += word
      }
      newString += ' '
     
    }
    return newString.substring(0, newString.length -1)
  }
  
  function letter(wrd){
    let isLetter = true
    if (wrd.length === 1){
      let lower = wrd.toLowerCase()
      if (!lower.match(/[a-z]/)) isLetter = false
      }
    
    return isLetter
  }
  
  function alternate(wrd){
    const frst = wrd.substring(0,1)
    const snd = wrd.substring(1)
    wrd= snd + frst + 'ay' 
    return wrd
  }