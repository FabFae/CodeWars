// https://www.codewars.com/kata/5aba780a6a176b029800041c


function maxMultiple(divisor, bound){
    while (bound > 0){
      if (bound % divisor == 0) return bound    
      bound--
    }
    return 0
  }