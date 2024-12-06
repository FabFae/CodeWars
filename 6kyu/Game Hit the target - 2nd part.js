// https://www.codewars.com/kata/6177b4119b69a40034305f14


const solution = mtrx => {
    const n = mtrx.length
    // find the arrow and where it is pointing
    for (let i = 0; i < n; i++){    
      for (let j = 0; j < n; j++){     
      // check if target is in the direction of the arrow
        if (mtrx[i][j] === '^') return checkAbove(mtrx, j, i) 
        if (mtrx[i][j] === '>') return checkRight(mtrx, j, i)      
        if (mtrx[i][j] === 'v') return checkBelow(mtrx, j, i)
        if (mtrx[i][j] === '<') return checkLeft(mtrx, j, i)
      }
    } 
    return false
  }
  
  function checkAbove(mtrx, x, y){
    for(let i = 0; i < y; i++){
      if (mtrx[i][x] === 'x') return true    
    }
    return false   
  }
  
  function checkRight(mtrx, x, y){
    for(let i = x; i < mtrx.length; i++){
      if(mtrx[y][i] === 'x') return true
    }  
    return false
  }
  
  function checkBelow(mtrx, x, y){
    for(let i = y+1; i < mtrx.length; i++){
      if(mtrx[i][x] === 'x') return true   
    }
    return false
  }
  
  function checkLeft(mtrx, x, y){
    for (let i = 0; i < x; i++ ){
       if(mtrx[y][i] === 'x') return true    
    }  
    return false
  }