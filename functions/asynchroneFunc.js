"use strict";


function greet(){
    return "Hello World";
}

async function test(){
    let promise = new Promise((resolve, reject) => {

        // Ist Asynchron
        setTimeout(() => resolve(greet()), 2000);
    })

    let result = await promise;

    console.log(result);
}

test();

console.log("dsfkdsjgf");
