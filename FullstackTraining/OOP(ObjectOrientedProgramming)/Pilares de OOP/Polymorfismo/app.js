//Polymorphism

//que es

//es el proceso por el cual una clase adquiere las propiedades de otra clase

//para que sirve?

//para reutilizar codigo y para que el codigo sea mas facil de mantener

//Haces un override de una funcion de la clase padre en la clase hija

class Animal{
    constructor(name){
        this.name = name;
    }
    makesound(){
        return `??? sound`;
    }
}

//subclass

class dog extends Animal{
    constructor(name){
        super(name);
    }

    //Overriding
    makesound(){
        return `woof`;
    }
}

class cat extends Animal{
    constructor(name){
        super(name);
    }

    //Overriding
    makesound(){
        return `meow`;
    }
}

function infoanimal(animal){
    console.log(`Name: ${animal.name}`);
    console.log(`Sound: ${animal.makesound()}`);
}

const generic = new Animal("Generic animal");
infoanimal(generic);

const doge = new dog("Aperro");

infoanimal(doge);

const cate = new cat("Gato");

infoanimal(cate);

//basicamente la super clase tiene una funcion que se puede modificar en las subclases

//esta siendo la de sonido, en cada subclase le damos un valor diferente a la funcion original dependiendo del caso

//como teniamos la clase perro como clase hija de animal, podemos usar la funcion makesound de animal en perro

