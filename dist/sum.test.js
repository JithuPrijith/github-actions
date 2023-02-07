"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test("add 4,5 gives 9", () => {
    expect((0, index_1.add)(4, 5)).toBe(9);
});
test("factorial of 5 is 120", () => {
    expect((0, index_1.factorial)(5)).toBe(120);
});
test("power of 3^5 is 243", () => {
    expect((0, index_1.power)(3, 5)).toBe(243);
});
test("calculate (5,4) result is 1793", () => {
    expect((0, index_1.calculate)(5, 4)).toBe(1793);
});
