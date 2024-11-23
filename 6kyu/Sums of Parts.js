// https://www.codewars.com/kata/5ce399e0047a45001c853c2b


function partsSums(ls) {
    if (ls.length === 0) return [0]
    let sums = []
    let last = ls.reduce((sum, acc) => sum += acc)
    sums.push(last)
    for (let itm of ls ){    
      last = last - itm
      sums.push(last)     
    } 
    return sums
  }
  
  