export function add (expression: string) {
  const romanMap: { [key: number]: string } = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };
  const number = Number(expression);

  if(number ===2 ){
    return romanMap[1] + romanMap[1];
  }
  if(number ===3 ){
    return romanMap[1] + romanMap[1] + romanMap[1];
  }


  return romanMap[number] || '';


}