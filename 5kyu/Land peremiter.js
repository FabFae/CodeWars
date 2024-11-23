// https://www.codewars.com/kata/5839c48f0cf94640a20001d3


function landPerimeter(arr) { 
    let total = 0
    for (let x = 0; x<arr.length; x++){
      for (let y = 0; y<arr[0].length; y++){
        if (arr[x][y] === 'X'){
          if (aboveEmpty(x,y,arr)) total++          
          if (belowEmpty(x,y,arr)) total++                 
          if (rightEmpty(x,y,arr)) total++                    
          if (leftEmpty(x,y,arr)) total++              
        }
      }
    }
    // console.log(total)
    return `Total land perimeter: ${total}`
  }
  
  function aboveEmpty(x, y, arr){
    if (x === 0) return true
    if (arr[x-1][y] === 'O') return true
    return false
  }
  
  function belowEmpty(x,y,arr){
    if (x === arr.length-1) return true
    if (arr[x+1][y] === 'O') return true
    return false
  }
  
  function rightEmpty(x,y,arr){
    if (y === arr[0].length-1) return true
    if (arr[x][y+1] === 'O') return true
    return false
  }
  
  function leftEmpty(x,y,arr){
    if (y === 0) return true
    if (arr[x][y-1] === 'O') return true
    return false
  }