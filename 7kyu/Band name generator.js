// https://www.codewars.com/kata/59727ff285281a44e3000011


function bandNameGenerator(str) {
    const letters = str.split('')
    if (letters[0] == letters[letters.length-1]) {
      const snd = letters.join('').substring(1, letters.length)
      letters[0] = letters[0].toUpperCase()
      return letters.join('')+snd        
    }
    letters[0] = letters[0].toUpperCase() 
    return 'The ' + letters.join('')
  }