//Ein Array um alle Objekte zu speichern
let allYourPokemonArray = [];

//Bauplan für alle Pokemon
class Pokemon {
    constructor(name, weight, catchDate, attacks) {
        this.name = name;
        this.weight = weight;
        this.catchDate = catchDate;
        this.attacks = attacks;
    }
    // Methode um die Werte vom jeweiligen Objekt ins HTML zu schreiben
    writeHTML() {
        //Alle Eigenschaften vom Objekt ins HTML schreiben
        let allPropertys = `${this.name} - ${this.weight} - ${this.catchDate} - ${this.attacks} <br>`;
        document.querySelector("#output").innerHTML += allPropertys;

        //* ============= Liste erstellen und alle Werte eintragen ===============
        let ulEl = document.querySelector("#list");
        // Neues <li> erstellen 
        let liEl = document.createElement("li");
        let imgInput = document.querySelector("#img");
        // Den Namen vom Pokemon reinschreiben
        liEl.textContent = `Name: ${this.name} Gewicht: ${this.weight} Fangdatum: ${this.catchDate} Attacken: ${this.attacks}`,
            liEl.innerHTML += `<img src="${imgInput.value}" alt="">`

        console.log(liEl);
        //In <ul> einfügen
        ulEl.appendChild(liEl);
    }
}


// Alle Elemente holen
let nameEl = document.querySelector("#name");
let weightEl = document.querySelector("#weight");
let catchDateEl = document.querySelector("#catchDate");
let attacksEl = document.querySelector("#attacks");
let buttonEl = document.querySelector("button");

//Beim jedem klick, erstellt er ein neues pokemon Objekt mit den Werten aus dem Input und fügt es dem HTML hinzu
buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    //* ============= Neues Objekt erstellen vom Input ===================
    //yourNewPokemon wird nach dem klick die Werte vom Input haben. Nach dem 
    // Zweiten Klick wird es mit neuen Werten überschrieben usw.
    let yourNewPokemon = new Pokemon(nameEl.value, weightEl.value, catchDateEl.value, attacksEl.value);
    //Methode um es ins HTML zu schreiben
    yourNewPokemon.writeHTML();



    //!  ======== Lösung mit Array =========================
    // outputArray.innerHTML = "";
    // Alle Objekte holen und mit element.name auf die jeweiligen Namen Eigenschaften der Objekte zugreifen
    // allYourPokemonArray.forEach(element => {
    //     outputArray.innerHTML += `${element.name} - ${element.weight} - ${element.catchDate} - ${element.attacks} ---`;
    //     console.log(element.name + element.weight)
    // });

    // Das neue Objekt dem Array hinzufügen
    allYourPokemonArray.push(yourNewPokemon);
    console.log(allYourPokemonArray);
})