// https://www.codewars.com/kata/5a434a9dc5e284724f000011


function replaceCommon(string, letter) {
    // good luck
    // every letter, except spaces
    let words = string.split(' ')
    // count number of appearences
    let count = new Map()
    for (const word of words){
      const chars = word.split('')
      for (const char of chars){
        if (count.has(char)){
          let currentCount = count.get(char)      
          count.set(char, currentCount += 1)
        }else{   
          count.set(char, 1)        
        }      
      }
    }   
    // console.log(count)  
    // determin which letter to relace 
    let max = 0
    let replace
    for (const pair of count){    
      if (pair[1] > max){
        max = pair[1]
        replace = pair[0]
      }    
    }
    // return edited string 
    return string.replaceAll(replace, letter) 
  }