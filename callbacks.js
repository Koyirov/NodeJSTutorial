"use strict";

function add(int1, int2){
    return int1 + int2;
}

function multiply(int1, int2){
    return int1 * int2;
}

function subtract(int1, int2){
    return int1 - int2;
}

function divide(int1, int2){
    return int1 / int2;
}

function calc(int1, int2, callback) {
    return callback(int1, int2);
}

console.log(calc(5, 10, add));
console.log(calc(5, 10, multiply));
console.log(calc(10, 5, subtract));
console.log(calc(10, 5, divide));