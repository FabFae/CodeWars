// https://www.codewars.com/kata/59f7fc109f0e86d705000043


function divisibleByThree(str){
    const arr = str.split('')
    const sum = arr.reduce((acc, curr) => acc + +curr, +0)
    return (sum % 3 === 0)
  }