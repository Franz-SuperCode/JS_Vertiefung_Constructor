class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    info() {
        console.log(`${this.name} ist ${this.alter} Jahre alt`);
    }
}

let erstePerson = new Person("Franz", 30);
erstePerson.info();
