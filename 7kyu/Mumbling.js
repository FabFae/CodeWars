// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039


function accum(s) {
	// your code
  let returnString = ''
  for (index in [...s]){      
    returnString = returnString.concat(s[index].toUpperCase())  
    for (let i = 0; i < index; i++){
      returnString = returnString.concat(s[index].toLowerCase())
    }
    returnString = returnString.concat('-')
  }
  return returnString.substring(0, returnString.length-1)
}