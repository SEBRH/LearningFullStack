//Clases

//ES6 de java

// es como un prototype pero mas facil de usar

//se crean objetos de una misma clase

//CLASS DECLARATION

class Persona {
    constructor(name, age){
         //instance member area
        this.name = name;
        this.age = age;
        this.printifno = function(){
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
    }
    greet() {//prototype members //Para todos los persona puedes llamar un greet

    return `Hello ${this.name}`;
    };
}
 
const jhon = new Persona('Jhon', 23);

console.log(jhon);

jhon.printifno();

console.log(jhon.greet());

//INHERITANCE IN CLASSES

//EXTTENDS Y SUPER no olvidar

//super es para llamar al constructor de la clase padre (te da todo de la clase padre)

class proggramer extends Persona {
    constructor(name, age, experience){
        super(name, age);
        this.experience = experience;
    }
    code(){
        console.log(`${this.name} is coding`);
    }
}


//ejercicio

class Hero{
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
    greet(){
        return `${this.name} says hello`;
    }
}

let mago = new Hero('mago', 1);

class Mage extends Hero{
    constructor(name, level, spell){
        super(name, level);
        this.spell = spell;
    }
    cast(){
        console.log(`${this.name} cast ${this.spell}`);
    }
}

const mage2 = new Mage('Mage2', 2, 'Fireball');

console.log(mage2);

mage2.cast();
