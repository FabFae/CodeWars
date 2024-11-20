// https://www.codewars.com/kata/550554fd08b86f84fe000a58


function inArray(array1,array2){
    // find all strings of a1 that are in a2
    const r = array1.filter(first => array2.some(second => second.includes(first)))
  
    // sort the array of strings we found
    console.log(r.sort())
    
    return r
  }