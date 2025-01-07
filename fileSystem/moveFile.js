"use strict"

const fs = require('fs').promises;

async function moveFile(source, destination) {

    try {
        await fs.rename(source, destination);
        console.log("File " + source + " wurde nach " + destination + " verschoben");
    } catch (err) {
        console.log("Es ist ein Fehler aufgetreten: " + err);
    }
}

function moveFileWithoutAsync(source, destination) {

    const moveFileLocal = () => {
        fs.rename(source, destination).then(() => {
            console.log("File " + source + " wurde nach " + destination + " verschoben");
        }).catch(err => {
            console.log("Es ist ein Fehler aufgetreten: " + err);
        })
    }

    moveFileLocal();
}

moveFile("testus.txt", "testOrdner/testus.txt");

moveFileWithoutAsync("testus.txt", "testOrdner/testus.txt");