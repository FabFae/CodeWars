// https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010


function bowlingPins(arr) {
    let returnString = 'IIIIIIIIII'
    
    // replace hits with ' '
    for (let i of arr){
      returnString = returnString.substring(0,(i-1)) + ' ' + returnString.substring(i, returnString.length)
    }
  
    return `${returnString[6]} ${returnString[7]} ${returnString[8]} ${returnString[9]}\n ${returnString[3]} ${returnString[4]} ${returnString[5]} \n  ${returnString[1]} ${returnString[2]}  \n   ${returnString[0]}   `
  }
  
  