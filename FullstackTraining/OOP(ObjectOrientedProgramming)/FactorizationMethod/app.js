//funcion para crear y retornar objetos

// porque?

// FactoriMethod es util para la creacion en masa de objetos

function createpersona(nombre, apellido, pl)
{
    return{
        nombre: nombre,
        apellido: apellido,
        pl: pl,
        fullname: function(){
            return(`my name is ${this.nombre} ${this.apellido} and my programming language is ${this.pl}`);
        }
    }
}

const John = createpersona("John", "Doe", "JS");

console.log(John.fullname()); // my name is John Doe and my programming language is JS  

//Excercise

function vehiculos(type, brand, model, year)
{
    return {
        type: type,
        brand: brand,
        model: model,
        year: year,
        info: function(){
            return(`This is a ${this.type} vehicle from ${this.brand} brand, model ${this.model} launched in ${this.year}`);
        }
    }
}

//usando this para referirnos al objeto que se esta creando

function objeto(type, brand, model, year)
{
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.info = function(){
        return(`This is a ${this.type} vehicle from ${this.brand} brand, model ${this.model} launched in ${this.year}`);
    }
}

const jhoncar = new objeto("car", "ford", "focus", 2019);

console.log(jhoncar.info()); // This is a car vehicle from ford brand, model focus launched in 2019

//NEW WORD

//First theres an empty object created

//we set "this" to point to that empty object

//we ommit return statement by using new

//BUILT IN CONSTRUCTOR

// que es? 

// son funciones que ya vienen con javascript y que nos permiten crear objetos de manera mas rapida

const numero = new Number(10);

console.log(numero); // Number {10}

const string = new String("hello");

console.log(string); // String {"hello"}

const boolean = new Boolean(true);

console.log(boolean); // Boolean {true}

const array = new Array(1,2,3,4,5);

console.log(array); // [1,2,3,4,5]

// Create Merhod 

// que es?

// es una funcion que se ejecuta cuando se crea un objeto

let person = {
    greet: function(){
        console.log(`Hello im ${this.name} ${this.lastname}`);
    }
}

const jhon = Object.create(person);

jhon.name = "Jhon";
jhon.lastname = "Doe";

jhon.greet(); // Hello im Jhon Doe //Este de aca se comparte con todos los objetos que se creen a partir de "person"

let sebas = Object.create(person,
    {
        name: {value: "Sebas"},
        lastname: {value: "Rex"}
    });

    console.log(sebas.greet()); // Hello im Sebas Rex //Poreso aqui te da el string completo

