// https://www.codewars.com/kata/576757b1df89ecf5bd00073b


function towerBuilder(nFloors) {
    // build here
    let blanks = nFloors-1
    let result = []
    for(let i = 0; i < nFloors; i++){
      let tmpString = ''
      tmpString = addCharN(tmpString, ' ', blanks-i)    
      tmpString = addCharN(tmpString, '*', 2*i + 1)  
      tmpString = addCharN(tmpString, ' ', blanks-i)
      
      result.push(tmpString)       
    }
    result.forEach(line => console.log(line))
    return result
  }
  
  function addCharN(inString, char, n){
    for(let i = 0; i < n; i++){
      inString += char
    }
    return inString
  }