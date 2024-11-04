// https://www.codewars.com/kata/6444f6b558ed4813e8b70d43



function graph(arr) {
    // Write your code here   
    let result = ''
    
    // find highes value
    max = Math.max(...arr)      
  
    let i= max
    while (i>=0){
      arr.forEach(val => {
        if(val === i) result += ' ____ '
        if(val > i)   result += '|    |'
        if(val < i)   result += '......'    
      })    
      
      if (i === max) result += (` ^ ${i}\n`)
      else result += (` | ${i}\n`)    
      i--
    }
    console.log(result)  
    return result.substring(0, result.length-1)
  }