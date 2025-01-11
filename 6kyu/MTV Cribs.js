// https://www.codewars.com/kata/5834a44e44ff289b5a000075


function myCrib(n) {
  const floors = n
  let returnString = ''
  // roof
  for (let i = 0; i < floors; i++){
    returnString += (' '.repeat(floors-i) + '/' + ' '.repeat(i*2) + '\\' + ' '.repeat(floors-i) + '\n')
  } 
  // roof edge
  returnString += ('/' + '_'.repeat(floors*2) +('\\') + '\n')
  // house
  for (let i = 0; i < floors-1; i++){
    returnString += ('|' + ' '.repeat(floors*2) + '|' + '\n' )
  }
  returnString += ('|' + '_'.repeat(floors*2) + '|' )
  // base
  console.log(returnString)
  return returnString;
}