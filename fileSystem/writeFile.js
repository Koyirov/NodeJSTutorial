"use strict"

const fs = require('fs').promises;

const PATH = "test.txt"

async function writeFile() {
    try{

        const Content = "Name, Anzahl, Preis";

        const write = () => {
            fs.writeFile(PATH, Content, { encoding: "utf8" }).then(() => {
                console.log('Title gesetzt');
            });
        }
        write();

    } catch(err) {
        console.error("Etwas ist schief gelaufen: " + err);
    }
}

async function addItem(name, anzahl, preis) {
    try{

        const Item = `\n${name}, ${anzahl}, ${preis}`

        const write = () => {
            fs.writeFile(PATH, Item, { encoding: 'utf8', flag: "a" }).then(() => {
                console.log('Item gesetzt');
            });
        }
        write();

    }catch(err) {
        console.error("Etwas ist schief gelaufen: " + err);
    }
}

(async function() {
    await writeFile();
    await addItem("Apfel", "25", "20$");
    await addItem("Banane", "65", "15$");
    await addItem("Kirsche", "45", "30$");
    await addItem("Kaki", "15", "40$");
    await addItem("Birne", "35", "25$");
})();
