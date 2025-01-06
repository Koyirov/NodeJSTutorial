"use strict"

function math(int1, int2) {
    let result = int1 + int2;
    return "Das ergebnis ist: " + result;
}

function string(var1, var2) {
    return var1 + var2;
}

module.exports = { math, string };