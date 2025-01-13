// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2


function smallEnough(a, limit) {
    console.log(a, limit);
    return a.every(value => {
      console.log(value);
      return value <= limit;
    });
  }
  
  
  