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
    let xFact = factorial(x);
    let yFact = factorial(y);
    let powerofxy = power(x, y);
    let powerofyx = power(y, x);
    return xFact + yFact + powerofxy + powerofyx;
  }
