// https://www.codewars.com/kata/59dce15af703c42af6000035


function eqAll(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const fst = iterator.next();
    let result = fst
    while (!result.done) {      
      if(fst.value === result.value){
        result = iterator.next(); // Zum nächsten Element wechseln
      } else {
        return false      
      }              
    }
    return true;
  }