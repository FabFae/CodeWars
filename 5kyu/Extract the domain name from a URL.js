// https://www.codewars.com/kata/514a024011ea4fb54200004b


function domainName(url){
    //your code here
    console.log(url)
    if (url.startsWith('http')){    
      sub = url.split('//')
      if(sub[1].startsWith('www.')) return sub[1].split('.')[1]
      else{
        sub2 = sub[1].split('.')
        result = sub2[0]
        return result      
      }    
    }
    else if(url.startsWith("www.")) return url.split('.')[1]
    
    else  return url.split('.')[0]
  }