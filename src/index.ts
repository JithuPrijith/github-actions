export function add(a:number,b:number){
    return a + b 
}

export function factorial(x:number):number {
    let result = x;
    for (let i = x - 1; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
  
  export function power(x:number, y:number):number {
    let result = x;
    for (let i = 1; i < y; i++) {
      result = result * x;
    }
    return result;
  }
  
  export function calculate(x:number, y:number):number {
    const xFact = factorial(x);
    const yFact = factorial(y);
    const powerofxy = power(x, y);
    const powerofyx = power(y, x);
    return xFact + yFact + powerofxy + powerofyx;
  }
