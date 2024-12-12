// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531


function dotCalculator (equation) {
    const elements = equation.split(' ')
    const operation = elements[1]
    //console.log(operation)
    const e1 = elements[0]
    const e2 = elements[2]
    
    if (operation === '+') return e1 + e2
    if (operation === '-') return e1.substring(0, e1.length - e2.length)
    if (operation === '*'){
      let result = ''
      for(let i = 0; i < e2.length; i++) result += e1  
      return result    
    } 
    if(operation === '//'){
      const div = Math.floor(e1.length / e2.length)
      let result = ''
      for (let i = 0; i < div; i++) result += '.'
      return result
    }
  }
  
  