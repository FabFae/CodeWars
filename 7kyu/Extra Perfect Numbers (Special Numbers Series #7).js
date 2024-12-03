// https://www.codewars.com/kata/5a662a02e626c54e87000123


function extraPerfect(n){
    let returnArray = []
    for (let i = 1; i < n+1; i++){ 
      const binaryString = (i >>> 0).toString(2)
      const binaryArray = binaryString.split('')
      if (binaryArray[0] == 1 && binaryArray[binaryArray.length - 1] == 1) returnArray.push(i)    
    }
    return returnArray
  }