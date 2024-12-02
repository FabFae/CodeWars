// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc


function solve(arr){
    let itemCounter = new Map()
    for(const elem of arr){
      if (itemCounter.has(elem)){      
        itemCounter.set(elem, itemCounter.get(elem)+1)     
      }
      else
      {
        itemCounter.set(elem, 1)  
      }   
    }
    let sorted = new Map([...itemCounter.entries()].sort((a, b) => b[1] - a[1]));
    
    // sort equal amounts 
    let unsorted = true
       sorted = new Map(
        [...sorted.entries()].sort((a, b) => {       
          if (a[1] === b[1] && a[0] < b[0]) {
             return a[0] - b[0];
          }             
        })
      );
  
    let returnArr = [] 
    for(const item of sorted){    
      for(let i = 0; i < item[1]; i++){
        returnArr.push(item[0])      
      }    
    }
    return returnArr
  }