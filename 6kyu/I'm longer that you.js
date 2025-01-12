// https://www.codewars.com/kata/5963314a51c68a26600000ae


function longer(s) {
    // split into single words and sort alphabetically
    let words = s.split(' ').sort()  
    // sort words by length
    words.sort((a, b) => a.length - b.length);
    
    return words.join(' ')
  }