// https://www.codewars.com/kata/5857e8bb9948644aa1000246


function determineTime (durations) {
    const maxTime = 24*60*60
    let totalTime = 0
    for (const duration of durations){
      const tmp = duration.split(':')
      const sum = 60*60*tmp[0] + 60*tmp[1] + 1*tmp[2]
      totalTime += sum    
    }
    return totalTime <= maxTime ? true : false  
  }