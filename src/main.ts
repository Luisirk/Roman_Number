export function add (expression: string) {
  let number = Number(expression);
  if(number === 1){
    return 'I'
  }
  if(number === 5){
    return 'V'
  }
  if(number === 10){
    return 'X'
  }
  if(number === 50){
    return 'L'
  }


}