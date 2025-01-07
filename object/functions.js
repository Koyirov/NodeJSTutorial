

function geldeinzahlen() {
    console.log("Es wurde Geld eingezahlt!");
}

function geldabbuchen() {
    console.log("Es wurde Geld abgebucht!");
}

// Constructor Object
function ConstCreditCard(color, height, balance, owner, transferoption){
    this.color = color;
    this.height = height;
    this.balance = balance;
    this.owner = owner;

    this.bezahlen = function () {
        console.log(this.owner + " kann damit bezahlen: " +  this.balance);
    };
    this.geldAbheben = () => {
        console.log(this.owner + " kann Geld vom Konto abheben: " + this.balance);
    };
    this.transfer = transferoption;
}

let creditCard = new ConstCreditCard('weiß', 36, 4986, "Simon", geldeinzahlen);

creditCard.transfer();
