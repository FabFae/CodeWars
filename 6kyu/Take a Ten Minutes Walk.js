// https://www.codewars.com/kata/54da539698b8a2ad76000228


function isValidWalk(walk) {
    //insert brilliant code here
    const numSteps = walk.length
    console.log(walk)
    
    if (numSteps === 10){
      let numN = 0
      let numS = 0 
      let numW = 0
      let numE = 0
      for (const letter of walk){
        if (letter === 'n'){
          numN++
        }
        if (letter === 's'){ 
          numS++
        }
        if (letter === 'e'){
          numE++
        }
        if (letter === 'w'){
          numW++
        }       
      }
      console.log(`n ${numN}`)
      console.log(`s ${numS}`)
      console.log(`e ${numE}`)
      console.log(`w ${numW}`)
      
      if (numN === numS && numW === numE){
        return true
      }else{
        return false
      }   
    }
    else{
      return false
    }
    
    
  }
  