// https://www.codewars.com/kata/5503013e34137eeeaa001648


function diamond(n){
    if (n%2 === 0 || n < 1) return null
    // top half
    let returnString = ''
    for (let i = 0; i < (n+1)/2; i++){
      const spaces = (n-2*i-1)/2 
      returnString += (`${' '.repeat(spaces)}${'*'.repeat(n-2*spaces)}\n`)
    }
    // bottom half
    for (let i = 1; i < (n+1)/2; i++){
      returnString += (`${' '.repeat(i)}${'*'.repeat(n-(2*i))}\n`)
    }  
    
    return returnString
  }