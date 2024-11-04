https://www.codewars.com/kata/55c6126177c9441a570000cc


function orderWeight(strng) {
    const numbers = strng.split(' ')
    let weightToWeight = new Map() 
    console.log(numbers)
    let multiples= []  
    
    for(let i = 0; i < numbers.length; i++){
      if(weightToWeight.has(numbers[i])) multiples.push(numbers[i])
      weightToWeight.set(numbers[i], quer(numbers[i]));
    }  
    
    const sorted = [...weightToWeight.entries()].sort((a, b) => sortVal(a,b));  
    const newOrder = Array.from(sorted, entry => entry[0]); 
  
     result = newOrder.join().replaceAll(',', ' ')
  
    for(let str of multiples){
      result = result.replace(str, `${str} ${str}`)
    }
    
    return result  
  }
  
  function quer(num){
    let sum = 0
    for(let i=0; i<num.length; i++) sum=sum+parseInt(num[i])
    return sum    
  }
  
  function sortVal(a, b){  
      const diff = a[1] - b[1];
      if (diff === 0) {
        return a[0].localeCompare(b[0]);
      }
      return diff;  
  }