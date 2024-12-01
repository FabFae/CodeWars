// https://www.codewars.com/kata/5a58d889880385c2f40000aa


function automorphic(n){  
    const numDigits = n.toString().length
    const lastDigits = (n*n) % 10**numDigits  
    if (lastDigits === n) return  "Automorphic"  
    return "Not!!"
  }