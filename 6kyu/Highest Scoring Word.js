// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272


function high(x){
    const offset = 96
    
    const words = x.split(' ')
    let winner = ''
    let highScore = 0
    
    for (const word of words) {
      const currentScore = [...word].reduce((acc, letter) => acc + letter.charCodeAt(0) - offset, 0);    
     
      if (currentScore > highScore){
        highScore = currentScore
        winner = word
      }
    }  
    return winner
  }