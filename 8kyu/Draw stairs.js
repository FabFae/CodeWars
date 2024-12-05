// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5



function drawStairs(n) {
    let result = ''
    let index = 0
    while(index < n){
      let tmp = ['I']    
      for(let j = 0; j < index; j++) tmp.unshift(' ')
      if (index>0) tmp.unshift('\n')
      result += tmp.join('')   
      index++
    }
    return result 
  }