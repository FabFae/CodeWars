// https://www.codewars.com/kata/541c8630095125aba6000c00


function digitalRoot(n) {
    // ...
    return checkSum(+n,)
  }
  
  function checkSum (value){
    let sum = +0
    console.log(value)
    for(let i = 0; i < value.toString().length; i++){
      sum += +value.toString()[i] 
    }   
    if (sum < 10) return sum
    else return checkSum(sum)    
  }