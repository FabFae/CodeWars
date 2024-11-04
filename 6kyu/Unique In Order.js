// https://www.codewars.com/kata/54e6533c92449cc251001667


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    console.log(iterable)    
    result = []
    if (iterable.length === 0){
      return result
    }
    
    if (iterable.length === 1){
      result.push(iterable[0])
      return result
    }
    
    console.log(iterable)
    if (iterable[0] === iterable[1]){
      result.push(iterable[0])
    }
    
    let last = iterable[0] 
      
  
    if (iterable[0] !== iterable[1]){
      result.push(iterable[0])
    }
    
    for(let i = 1; i < iterable.length; i++){
      const current = iterable[i]
      if (current !== last){
        console.log(current)
        result.push(current)
      }
      last = current
    }
    console.log(result)
    return result
    
  }
