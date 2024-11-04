// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9


function findShort(s){
    substrings = s.split(' ') 
    let minLen = Number.MAX_SAFE_INTEGER
    substrings.forEach(sub => sub.length < minLen ? minLen=sub.length : {} )
    return minLen
     
  }