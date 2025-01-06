"use strict"

const fs = require('fs').promises;

function read(filePath) {
    let data = fs.readFile(filePath);
    return data;
}

function readFile(filePath) {
    try{
        const data = () => {
            read(filePath).then(res => {
                console.log(res.toString());
            });
        }
        data();
    }catch(err) {
        return "Es gab einen Fehler: " + err;
    }
}

readFile("test.txt");