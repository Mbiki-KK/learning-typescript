"use strict";
// Literal Types
let username;
// username = Miquella -- doesn't work
// functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (messange) => {
    console.log(messange);
};
logMessage("Hello there");
logMessage(add(2, 3));
logMessage("Hello there");
// interface mathFunction {(a: number, b:number): number}
// For sake of habit, use type for type literals and interface for class definition
let subtract = function (c, d) {
    return c - d;
};
logMessage(subtract(2, 3));
let multiply = function (f, g) {
    return f * g;
};
logMessage(multiply(4, 6));
// Optional parameters
const addAll = (a, b, c) => {
    // typeguard - avoids error of possibly undefined
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 4));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
// Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
