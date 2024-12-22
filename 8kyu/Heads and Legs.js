// https://www.codewars.com/kata/574c5075d27783851800169e


function animals(heads, legs){    
    if (heads === 0 && legs === 0) return [0, 0]
    if (heads === 0 ) return "No solutions"
    if (heads < 0 || legs < 0) return "No solutions"
    for(let i = 0; i < heads+1; i++){    
      const chickens = i
      const cows = heads - i
      if (chickens * 2 + cows * 4 === legs) return [chickens, cows]    
    }
    return "No solutions"
  }