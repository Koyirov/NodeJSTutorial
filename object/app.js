"use strict";

let Creditcard = {
    color: "weiß",
    height: 4,
    guthaben: 2500,
    besitzer: "Du",
    bezahlen: function () {
        console.log("Ich kann damit bezahlen");
    },
    geldAbheben: () => {
        console.log("Ich kann Geld vom Konto abheben");
    }
}

let Feelings = {

    hass: () => {
      console.log("Kann andere Dinge hassen!");
    },
    liebe: () => {
        console.log("Kann andere Dinge lieben!");
    }
}

//Creditcard.bezahlen();


//Factory Funktion
function Kreditkarte (color, height, balance, owner) {

    return {
        color: color,
        height: height,
        guthaben: balance,
        besitzer: owner,
        bezahlen: function () {
            console.log(owner + " kann damit bezahlen");
        },
        geldAbheben: () => {
            console.log(owner + " kann Geld vom Konto abheben");
        }
    }
}

let newKreditkarte = Kreditkarte('rot', 80, 2000, 'Max');

newKreditkarte.bezahlen();