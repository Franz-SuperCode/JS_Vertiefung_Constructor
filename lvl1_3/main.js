let outputEl = document.querySelector("#output");
//Klasse wird erstellt mit Eigenschaften & Methoden
class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    info() {
        console.log(`${this.name} ist ${this.alter} Jahre alt`);
    }
    write() {
        let checkboxEl = document.querySelector("#checkbox").checked;
        //Neues <li> Element einfügen mit Inhalt vom Input
        let newLiEl = document.createElement("li");
        newLiEl.textContent += `${this.name} ist ${this.alter} Jahre alt`
        outputEl.appendChild(newLiEl);
        //Wenn checkbox aktiv, <li>> Rot färben
        if (checkboxEl) {
            newLiEl.style.color = "red";
        }
    }
}

//Bei jedem klick, wird das neu erstellte Objekt mit den neuen Inputs überschrieben
let buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", (event) => {
    event.preventDefault();

    let nameEl = document.querySelector("#name").value;
    let ageEl = document.querySelector("#age").value;
    let neuePerson = new Person(nameEl, ageEl);
    neuePerson.write();








})
