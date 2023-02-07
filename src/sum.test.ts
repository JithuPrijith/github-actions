
import {add , factorial, power, calculate}from "./index"


test("add 4,5 gives 9",() => {
    expect(add(4,5)).toBe(9)
})
test("factorial of 5 is 120", () => {
    expect(factorial(5)).toBe(120);
  });
  
  test("power of 3^5 is 243", () => {
    expect(power(3, 5)).toBe(243);
  });
  
  test("calculate (5,4) result is 1793", () => {
    expect(calculate(5, 4)).toBe(1793);
  });
  