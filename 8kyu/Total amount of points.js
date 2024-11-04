// https://www.codewars.com/kata/5bb904724c47249b10000131


function points(games) {
    console.log(games)
    const pairs = games.map(score =>  [x,y] = score.split(':'))
    console.log(pairs)
  
    const sum = pairs.reduce((accumulator, [numX, numY]) => {
      if (numX > numY) {
          return accumulator + 3;
        } else if (numX < numY) {
          return accumulator + 0;
        } else if (numX === numY) {
          return accumulator + 1;
        }
  
      return accumulator;
      }, 0);
    
    console.log(sum)
    return sum
  }