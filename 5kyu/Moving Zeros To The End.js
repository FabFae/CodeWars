// https://www.codewars.com/kata/52597aa56021e91c93000cb0


function moveZeros(arr) {
    const len = arr.length
    let i = len
    while(i>0){
      i--
      if(arr[i]===0){
        arr.splice(i,1)
        arr.push(0)      
      }     
    }   
    return arr
  }