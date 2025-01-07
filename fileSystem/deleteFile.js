"use strict"

const fs = require('fs').promises;

const filePath = "text.txt";


async function deleteFile(fileName) {
    try{
        await fs.unlink(fileName);
        console.log("Es wurde " + fileName + " gelöscht");
    }catch(err){
        console.log("Es ist ein fehler aufgetreten: " + err);
    }
}

function deleteFileWithoutAsync(fileName) {
    const deletes = () => {
        fs.unlink(fileName).then(() => {
            console.log("Es wurde " + fileName + " gelöscht");
        }).catch(err => {
            console.log("Es ist ein fehler aufgetreten: " + err);
        });
    }
    deletes();
}


deleteFile(filePath).then(r => console.log(r));

deleteFileWithoutAsync(filePath);