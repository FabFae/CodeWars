// https://www.codewars.com/kata/57a049e253ba33ac5e000212


function factorial(n){
    if (n === 0 ) return 1
    let total = 1
    for(let i = 1; i < n+1; i++) total = total * i  
    return total
  }