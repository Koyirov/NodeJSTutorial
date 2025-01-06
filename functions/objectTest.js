function Person(name, alter) {

    // Eigenschaften
    let var1 = name;
    let var2 = alter;


    // Methoden
    function getPersonInfo() {
        return var1 + " " + var2;
    }

    return getPersonInfo();
}

let bank = [{
    bankname: "Sparkasse",
    farbe: "rot",
    customer_count: 1526,
    function() {
        return "Wir sind die Sparkasse";
    }
}];

console.log(bank[0].function());

console.log(Person("Simon", 30));
console.log(Person("Herbert", 56));
