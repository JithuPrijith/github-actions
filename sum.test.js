
const add = require("./index");

test("sum to be 9 " ,() => {
    expect(add(4,5)).toBe(9);
})