
//Prototype Model 

// que es?

// es un modelo de objetos que permite la reutilizacion de codigo y la herencia de propiedades entre objetos

// como funciona?

// cada objeto tiene una propiedad interna llamada prototype que apunta a un objeto

// ese objeto prototype tiene una propiedad prototype que apunta a otro objeto y asi sucesivamente hasta llegar a null

const obj = {};

console.log(obj); // cuando ves ahi sale un prototype. Ese prototype es el que apunta a null

//el prototype sirve como el padre de los objetos
// y si no encuentra una propiedad en el objeto que se esta creando, va a buscar en el prototype

console.log(Object.getPrototypeOf(obj)); // {}

const Arrei = new Array();

function Persona(name1,name2,pl){
    this.name1 = name1;
    this.name2 = name2;
    this.pl = pl;
}

const jhonaz = new Persona("Jhon", "Doe", "JS");
console.log(jhonaz); // Persona {name1: "Jhon", name2: "Doe", pl: "JS"}

//Changing the prototype (normalmente no lo hagan)

console.log(Array.prototype); // Array(0) []

Array.prototype.pop = function(){
    return "no quiero que me saques";
}

const as = [1,2,3,4,5]; 

console.log(as.pop()); // no quiero que me saques

//creando metodos en el prototype

Array.prototype.first = function(){
console.log("soy el primero", this[0]);	
}

const qes = "olas que ase";

qes.prototype.upper = function(){
    return this.toUpperCase();
}

console.log(qes.upper()); // OLAS QUE ASE

//

//function Animal

function Animal(name){
    this.name = name;
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Animal.prototype.sound() = function()
{
    return "animal sound";
};

const dog = new Dog("firulais", "chihuahua");

console.log(dog.sound()); // animal sound

dog.prototype = Object.create(Animal.prototype); // esto es para que dog herede de animal y pueda usar sus metodos

