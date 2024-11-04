// https://www.codewars.com/kata/5544c7a5cb454edb3c000047


function bouncingBall(h,  bounce,  window) {
    // your code here
    if(h<=0  || bounce <= 0 || bounce >= 1 || window >= h) return -1
  
    let seen = -1
    while(h>window){
      seen +=2
      h = h*bounce
    }
    return seen
  }