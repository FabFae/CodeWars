// https://www.codewars.com/kata/55c45be3b2079eccff00010f


function order(words){
    // ...
    words = words.split(' ')
    let result = []
    for(let i = 0; i < words.length; i++){
      const index = getIndex(words[i])
      result[index] = words[i]
    }
    return makeString(result)
  }
  
  function getIndex (word){
    let index = -1
    for(let i = 0; i < word.length; i++){
      if (word[i]>='0' && word[i] <= '9') index = word[i]  
    }
    return index
  }
  
  function makeString(arr){
    let res = ''
    for(let i = 1; i < arr.length; i++){
      res += arr[i] + ' '  
    }
    return res.substring(0,res.length-1)  
  }