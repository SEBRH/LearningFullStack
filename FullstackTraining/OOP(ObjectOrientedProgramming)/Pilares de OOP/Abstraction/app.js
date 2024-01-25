//Abstraction

//que es?

//es el proceso de ocultar los detalles de implementacion de un objeto

//para que sirve?

//para que el usuario no pueda acceder a los datos de un objeto

//como se hace?

//con modificadores de acceso

//ejemplo

class Animal{
    constructor(name)
    {
        this.name = name;
    }
    
    //abstract method  (para subclases)

    makesound(){
    throw new Error("Method make sound must be implemented") //a esto 
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makesound(){
        return `${this.name} barks`; //se le agrega esto.
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    makesound(){
        return `${this.name} meows`;
    }
}

const dog = new Dog("Aperro");

console.log(dog.makesound());

const cat = new Cat("Gato");

console.log(cat.makesound());

//basicamente lo que seria complejo para el usuario se oculta y se le da una interfaz mas simple

//makesound no funciona en la clase animal pero si en las subclases de animal

//esto para simplificar el codigo y poder simplificar funciones complejas


