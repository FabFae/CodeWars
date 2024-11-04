// https://www.codewars.com/kata/5715eaedb436cf5606000381


function positiveSum(arr) {
    result = 0
    arr.forEach(num => num>0 ? result+=num : {})
    return result
                
  }