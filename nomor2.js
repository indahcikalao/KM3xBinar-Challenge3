class Animal {
    constructor(name, age, status, legs, species) { 
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    } 

    introduce() {
        return `Nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`

    }
}


class Shark extends Animal {

    constructor(name, age, status) {
        super(name, age, status)
        this.legs = 0
        this.species = 'shark' 
    }

}

const hiu = new Shark('hiuw', 5, 'berenang') 
console.log(hiu.introduce())

class Cat extends Animal {

    constructor(name, age, status) {
        super(name, age, status)
        this.legs = 4
        this.species = 'cat' 
    }

}

const kucing = new Cat('kucheng', 10, 'berjalan') 
console.log(kucing.introduce())

class Dog extends Animal {

    constructor(name, age, status, master) {
        super(name, age, status)
        this.legs = 4
        this.species = 'dog'
        this.master = master
    }

    GreetMaster(){
        return `Hello, ${this.master}`
    }

}

const doggo = new Dog('doggo', 3, 'berjalan', 'Cikal') 
console.log(doggo.introduce())
console.log(doggo.GreetMaster())
