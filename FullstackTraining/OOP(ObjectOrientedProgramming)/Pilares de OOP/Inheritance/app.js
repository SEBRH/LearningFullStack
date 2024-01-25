//Inheritance

//que es 

//es el proceso por el cual una clase adquiere las propiedades de otra clase

//para que sirve?

//para reutilizar codigo

//ES5

function Animal(name){
    this.name = name;
}   

Animal.prototype.makesound = function(){
    return `??? sound`;
}

//subclass

function Dog(name){
    Animal.call(this, name);
}

//setup prototype chain

Dog.prototype = Object.create(Animal.prototype);

//add method

Dog.prototype.makesound = function () { return `woof`;};

const generic = new Animal("Generic animal");

console.log(generic.makesound());

const dog = new Dog("Aperro");

console.log(dog.makesound());

console.log(dog);

//ES6

//------------------------------------

//class declaration

class Animale{
    constructor(name){
        this.name = name;
    }
    makesound(){
        return `??? sound`;
    }
}

//subclass

class Doge extends Animale{
    constructor(name){
        super(name);
    }
    makesound(){
        return `woof`;
    }
}

const generik = new Animale("Generic animal");

console.log(generik.makesound());

const dogo = new Doge("Aperro");

console.log(dogo.makesound());

console.log(dogo);


