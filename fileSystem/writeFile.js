"use strict"

const fs = require('fs').promises;

const PATH = "test.txt"

let ItemApple = {
    name: "Apfel",
    menge: "60",
    preis: "500$",
}

let ItemLemon = {
    name: "Lemon",
    menge: "200",
    preis: "50$",
}

let ItemMandarine = {
    name: "Mandarine",
    menge: "15",
    preis: "40$",
}

let ItemBanane = {
    name: "Banane",
    menge: "65",
    preis: "70$",
}

const items = [ItemApple, ItemLemon, ItemMandarine, ItemBanane];

async function writeFile(callBackFunction2, ItemsObject) {
    try{

        const Content = "Name, Anzahl, Preis";

        const write = () => {
            fs.writeFile(PATH, Content, { encoding: "utf8" }).then(() => {
                console.log('Title gesetzt');
            }).then(() => {
                ItemsObject.forEach(ItemObject => {
                    callBackFunction2(ItemObject.name, ItemObject.anzahl, ItemObject.preis);
                })
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

// (async function() {
//     await writeFile();
//     await addItem("Apfel", "25", "20$");
//     await addItem("Banane", "65", "15$");
//     await addItem("Kirsche", "45", "30$");
//     await addItem("Kaki", "15", "40$");
//     await addItem("Birne", "35", "25$");
// })();


function addToList(callBackFunction) {

    const setList = () => {
        callBackFunction(addItem, items);
    }

    setList();
}

addToList(writeFile)
