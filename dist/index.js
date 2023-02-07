"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = exports.power = exports.factorial = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function factorial(x) {
    let result = x;
    for (let i = x - 1; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
exports.factorial = factorial;
function power(x, y) {
    let result = x;
    for (let i = 1; i < y; i++) {
        result = result * x;
    }
    return result;
}
exports.power = power;
function calculate(x, y) {
    let xFact = factorial(x);
    let yFact = factorial(y);
    let powerofxy = power(x, y);
    let powerofyx = power(y, x);
    return xFact + yFact + powerofxy + powerofyx;
}
exports.calculate = calculate;
