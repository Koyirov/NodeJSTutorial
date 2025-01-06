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

console.log(Person("Simon", 30));
console.log(Person("Herbert", 56));
