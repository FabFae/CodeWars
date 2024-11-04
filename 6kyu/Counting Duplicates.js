// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1


function duplicateCount(text){
    //...
  
    text = text.toLowerCase()
  
    const len = text.length
    let found = ''
    let count = 0 
    for(let i = 0; i < len; i++){
      const current = text[i]       
      const sut = text.substring(0, i) + text.substring(i+1, len)
      
      if(sut.includes(current) && !found.includes(current)){
        count++
        found+=current
        console.log(current)
      }    
    }
    return count
  }