// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb


function firstDup (s) {
    // your solution here
    const len = s.length
    let result
    for (let i = 0; i<len; i++){
      const tail = s.substring(i+1, len)
      if (tail.includes(s[i])){
        result=s[i]
        break
      }
    }
    return result
  }