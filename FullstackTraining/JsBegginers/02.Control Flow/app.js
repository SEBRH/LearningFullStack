//if else

let password;

if (password === 8)
{
    console.log("WellCome");
}
else if (password <= 8)
{
    console.log("TooShort");
}
else if (password >= 8)
{
    console.log("TooLong" + "/n" + "password should be 8 characters long");
}
else
{
    console.log("Please provide a password");
}

// Switchs

let fruit = "banana";

switch (fruit)
{
    case "banana":
        console.log("mmmonke");
        break;  
    case "orange":
        console.log("oranj");
        break;
    case "apple":
        console.log("hey apple");
        break;
    default:
        console.log("Sussus amogus");
        break;
}

// FOR loops

for (let i = 20; i < 100; i++)
{
    console.log("Crazy? I was crazy once, they locked me in a room a rubber room, a rubber room of rats, and rats make me crazy.");
}

let i = 0;

do
{
    console.log("Crazy? I was crazy once, they locked me in a room a rubber room, a rubber room of rats, and rats make me crazy.");
    i++;
}while (i < 10);

//Logical Operators

password = "chickenGalaxy";

if (password.length >= 8 && password.includes("chicken"))
{
    console.log("son los poios ermanos");
} 

//Arrays (joder no)


//empty
//let Lista = [];
//numeros
let numeros = [1,2,3,4,5];
let strings = ["hola", "como", "estas"];
//nested array

let nested = [1,2,3,4,5, ["hola", "como", "estas"]];


//Haciendo jajas con arrays

const listas = ["hola", "como", "estas"];

listas.push("bien");
//agrega al final

listas.pop();
//quita el ultimo

listas.shift();
//quita el primero

listas.unshift("hola");
//agrega al principio


listas.splice(1, 1, "como estas");
//quita y agrega en la posicion 1, 1 elemento

listas.reverse();
//reversa el array

console.log(listas.includes("estas"));
//revisa si esta en el array

console.log(listas.join("-"));



//OBJECTS

//Se usan {} para crearlos
const persona = {

    firstname: "Sebastian",
    lastname: "Ramirez",
    age: 20,
    hobbies: ["gaming", "programming", "music"],
    location: {
        city: "Trujillo",
        country: "Peru"
    },

}
//Acceder a los valores

console.log(persona.firstname);

console.log(persona["firstname"]);//se hace cuando no se lee como string con el punto

const auto = {
    type: "carro",
    model: "Ford",
    color: "red",
}

console.log(auto.type);

//Agregar valores

auto.model = "Toyota";

auto.wheels = 4;

console.log(auto);


// FUNCTIONS  

function greet()
{
    console.log("Hello");
}

//call, run, execute.

greet();

function funcioncondato(texto)
{
    console.log(`El texto es: "${texto}"`);
}

funcioncondato("hola");


//ejer

function myFunction(num1, num2)
{
    return num1 * num2;
}

//argument es lo que se le pasa a la funcion

//Function declaration and expression


//Declaration
function nombrefunc(nombre)
{
    console.log(`Hola ${nombre}`);
}

nombrefunc("Sebastian"); //este puede ponerse antes de la funcion

//Expresion
const nombrefunc2 = function(nombre)
{
    console.log(`Hola ${nombre}`);
}

nombrefunc2("Sebastian"); //este no puede ponerse antes de la funcion

//callback (cuando una funcion se pasa como argumento a otra funcion)

function CallFunc(func)
{
    const value = 10;
    func(10);
}

CallFunc(
function(value)
{
    console.log(value);
}
);

//otra forma mas comprensible

function CallFunc2(siu, func)
{
    console.log(`siuuu ${siu}`);
    func();
}

function callback()
{
    console.log(`Esto ez un callback`);
}

CallFunc2("segso", callback);

//global and local

//global( cuando esta fuera de un bloque de funcion (funciona para todo el codigo))

//local (cuando esta dentro de un bloque de funcion (solo funciona dentro de la funcion))   

//block scope


//Json

const personaJson =
//JSON (JavaScript Object Notation)

//esta wbd sirve para mongodb

{
    "name": "Sebastian",
    "age": 20,
    "hobbies": ["gaming", "programming", "music"],
    "location": {
        "city": "Trujillo",
        "country": "Peru"
    },
    "email": "segs@correo.com"
}

//Json.stringify() (convierte un objeto a un string)

console.log(JSON.stringify(personaJson));

//Json.parse() (convierte un string a un objeto)

console.log(JSON.parse(JSON.stringify(personaJson)));

const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(`Hoy es ${day} de ${month} del ${year}`);

date.setDate(date.getDate() + 1);

console.log(date);

//Set Interval

//Repite una funcion cada cierto tiempo 

//setInterval(() => console.log("Hola"), 1000);

//Set Timeout cuando se ejecuta una funcion despues de cierto tiempo

setTimeout(function(){ console.log("Esto se ejecuto despuesn de 3 segundos")}, 3000);

//Parar un intervalo

const intervalo = setInterval(() => console.log("Increible"), 1000);

setTimeout(function()
{ clearInterval(intervalo);
 console.log("Se paro el intervalo");
}, 10000);


