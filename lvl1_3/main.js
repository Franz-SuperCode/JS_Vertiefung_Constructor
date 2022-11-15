//Das Array wird noch nicht verwendet
let allePersonen = [];


class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    info() {
        console.log(`${this.name} ist ${this.alter} Jahre alt`);
    }
    write() {
        let outputEl = document.querySelector("#output");
        let checkboxEl = document.querySelector("#checkbox").checked;

        // if (checkboxEl === true) {
        //     console.log("rot");
        //     outputEl.style.color = "red";
        // } else {
        //     console.log("schwarz");
        // }

        outputEl.innerHTML += `${this.name} ist ${this.alter} Jahre alt <br>`
    }

}



let buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", (event) => {
    event.preventDefault();

    let nameEl = document.querySelector("#name").value;
    let ageEl = document.querySelector("#age").value;
    let neuePerson = new Person(nameEl, ageEl);


    neuePerson.write();




    //Beim klicken wird ein Neues Objekt  erstellt und in ein Array gespeichert
    // let neuePerson = new Person(nameEl, ageEl);
    // allePersonen.push(neuePerson);



    // Rufe die Methode auf um diese

    console.log(allePersonen);







})
