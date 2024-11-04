// https://www.codewars.com/kata/5679aa472b8f57fb8c000047


function findEvenIndex(arr)
{
  //Code goes here
  index = -1
  const len = arr.length
  for (let i = 0; i < len; i++){    
    sumL = sumArray(arr.slice(0, i))  
    sumR = sumArray(arr.slice(i+1))   
    if (sumR === sumL){
      index = i
      break
    }
  }
  return index
}


function sumArray(arr){
  sum = 0
  arr.forEach((num) => sum += num)
  return sum
}