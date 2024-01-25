//Template Strings

console.log(`this is a
random text lol ekisde`)


//cuando tienes mucho texto usamos template string
console.log(`siuuuu
uuuuuu
uuuu`)
//nos permite usar variables dentro de un string y darle forma a los strings

console.log(`${2+2}`);

//nos permite hacer multilineas y usar variables dentro de un string

//Tambien podemos llamar funciones (que retornen) dentro de un template string

function texto(cantidad)
{
    return `Joder mira cuanto texto ${cantidad}`;
}

console.log(`${texto(100)}`);

//tambien podemos usar operadores ternarios

const edad = 18;

console.log(`Eres ${edad >= 18 ? "mayor" : "menor"} de edad`)

//otra sintaxis de funcion (funcion con flecha)

greet = (variable) =>
{
   return console.log(`Hola ${variable}`);
};

greet("Sebastian");

double = (numero) => numero*2;

console.log(double(2));

setTimeout(() => console.log("texto"), 1000)

simplificado = nombre => `Hola ${nombre}`;

console.log(simplificado("Sebastian"));

//ENHANCED object literals
//sirve para crear objetos de una manera mas sencilla

function user(nombre, edad, pais)
{
    return {
        nombre: nombre,
        edad: edad,
        pais: pais,
    };

}

console.log(user("Sebas", 20, "Peru"));


const Alex = user("Alex", 24, "Colomb");

console.log(Alex);

//simplificado

function userSIMPLIFICADO(nombre, edad, pais)
{
    return{
        nombre,
        edad,
        pais,
//tambien podemos agregar metodos

        /*ntroduccion: function(){
            console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
        */
        introduccion: () =>{
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
    };
    //methods

}

//REFACTOR METHOD

const a = 1, 
b = 2,
c = 3;

const  obj = {
    a,b,c
};

//pasar de ES5 a ES6

/* var lib = {
    sum:function(a,b){
        return a + b;
    },
    mult: function (a,b){
        return a*b;
    },
};*/

const lib = {
    sum: (a,b) => {a+b},
    mult: (a,b) => {a*b},
};

getPerson = (name,age,height) =>{return {name, age, height};}

//tambien puede ser 

/* function getPerson(name,age,height)
{
    return {
        name,
        age,
        height
    };
}*/


console.log(getPerson("Sebas", 20, 1.80));  

//default function es cuando no le pasamos parametros a una funcion y tenemos que ponerle un valor por defecto

/*
function counto5(count)
{
    if(count === true)
    {
        for (let i = 0; i < 5; i++) {
        console.log(`count ${i}`);
        }
    }
}*/

counto5();
// en este caso no se sabe si count es true o false
//poreso debemos darle un valor default que sea false

function counto5(count = false)
{
    if(count === true)
    {
        for (let i = 0; i < 5; i++) {
        console.log(`count ${i}`);
        }
    }
    else
    {
        console.log("count is false");
    }
}

//spread operators

//Convierte un array a una lista de argumentos individuales

//este se usa en funciones, arrays y objetos

function dame4(a,b,c,d)
{
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

const colores = ["rojo", "azul", "verde", "amarillo"];

dame4(colores);

//en este caso el arreglo necesita expandirse para que los valores del dame 4 coincidan con los del arreglo
console.log("=========spread operator========");
//para eso usamos el spread operator

dame4(...colores);

//otra forma seria para concatenar arreglos

const unal5 = [1,2,3,4,5]; 
const cincoal10 = ["seis","siete","ocho","nueve","diez"];

const concatenado = [...unal5, ...cincoal10];

console.log(concatenado);

//tambien podemos usarlo para crear copias de arreglos

const copia = [...unal5];

console.log(copia);

//asimismo podemos aumentar arreglos con el spread operator

const arregloaumentado = [1,2,3, ...unal5, "Increible", ...cincoal10];

console.log(arregloaumentado);

//parametro rest

//deja pasar un numero indefinido de argumentos a una funcion y los convierte en un arreglo


/*
function userrest(userdata)
{
    console.log(userdata);
}*/

userrest("Sebas", 20, "Peru"); //asi no funciona porque no es un arreglo sino una lista de argumentos

//para eso usamos el parametro rest

function userrest(...userdata)
{
    console.log(userdata);
}

//si intentas que se muestre un valor antes de ponerlo en un arreglo lo agregas el parametro pero el rest
//siempre al final


//destructuring

//nos deja extraer datos de arreglos y objetos y asignarlos a variables (muy util..)

const arreglou = ["uno", "dos", "tres"];

const [valor1,valor2,valor3] = arreglou;

console.log(valor1,valor2,valor3);

//el chiste es que solo te va a aceptar los qeue ya tienes en un arreglo, es decir si pongo valor 4 sale undefined

let al, bl;

[al = 1,bl = 2] = ["UNO"];

console.log(al, bl);

//distinct variables

function f()
    {
        return [1,2];
    }

let alz, blz;

[alz,blz] = f();

console.log(alz,blz);

//sirve demasiado ya que sin necesidad de crear un arreglo ya te guarda los datos en variables

//para ignorar un dato hacemos lo siguiente

const [a1, ,b1] = [1,2,3];

console.log(a1,b1); 

//como no se puso nada en el medio se salta el 2


//destructuring objects


const student = {nom: "Sebas", eish: 20, contri: "Peru"};

const {nom,eish,contri} = student;

console.log(nom);
console.log(eish);
console.log(contri);

//Aqui lo importante son los nombres en el objeto y en las variables, si no coinciden no funciona

//tambien podemos cambiar el nombre de las variables
console.log("=======cambiando nombres=========");

const {nom: nombreeish, eish: eishh, contri: contrii} = student;

console.log(nombreeish);
console.log(eishh);
console.log(contrii);

let {a:x, b:y, ...rest} = {a: 100, b:200, c:399, d:194, e:765};
console.log(x,y,rest);

//challenge

const user2 = {
    name: "jhon",
    age:30,
    gender: "male",
    country: "usa",
}

const {name:personname, age: personage,country: personcountry} = user2;

console.log(personname, personage, personcountry);

//tambien podemos usarlo para pasar parametros a una funcion


function printpersoninfo(person)
{
    console.log(`Name: ${person.name} Age: ${person.age} Country: ${person.country}`);
}

printpersoninfo(user2);

//tambien podemos hacerlo de esta manera

let options = {
    title: "Menu",
    items: ["item1", "item2"],
};

function showMenu({title = "untitled", width:w = 200, height:h = 100, items: [item1, item2]})
{
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options);

//aqui deconstruimos objetos en un array

const canciones = [ { 
    nombre: "song1", cantante: "cantante1", duracion: "3:00"},{
    nombre: "song2", cantante: "cantante2", duracion: "3:00"},{
    nombre: "song3", cantante: "cantante3", duracion: "3:00"},{
    nombre: "song4", cantante: "cantante4", duracion: "3:00"},{
    }
];

const [,, {cantante: s}] = canciones;
console.log(s);

// Operadores terniarios

//otra forma de hacer un if pero mas corto

const edad2 = 18;

console.log(`Eres ${edad2 >= 18 ? "mayor" : "menor"} de edad`)

//SYNTAX (variable a evaluar) ? (valor si es true) : (valor si es false)

//Otro ejemplo

const pass = 2;

console.log(`${pass === 8 ? "contraseña segura" : "contraseña debe tener 8 caracteres."}`)

const age = 18;

const isadult = age >= 18 ? "adult" : "not adult";

console.log(isadult);

//for in loop

//sirve para iterar sobre las propiedades de un objeto arrays etc

const user3 = {
    name: "Sebas",
    age: 20,
    country: "Peru",
}

for (let keys in user3)
{
    console.log(keys);
}

//tambien podemos mostrar los valores

for (let keys in user3)
{
    console.log(keys, user3[keys]);
}


let arregloz = [1,2,3,4,5];

for (let index in arregloz)
{
    console.log(`${index}: ${arregloz[index]}`);
}

const object = { a: 1, b: 2, c: 3 };

for (let prop in object)
{
    console.log(`${prop}: ${object[prop]}`);
}

//for of loop (ES6) (solo para arreglos) sirve para iterar sobre los valores de un arreglo

let personas = ["Sebas", "Alex", "Jhon"];

for (let person of personas)
{
    console.log(person);
}

//tambien podemos usarlo para iterar sobre un string

let textoz = "skibiditoile";

for (let letra of textoz)
{
    console.log(letra);
}

//for each loop

//sirve para iterar sobre los valores de un arreglo

let colores2 = ["rojo", "azul", "verde"];

colores2.forEach(colore => console.log(colore)) ; //ES6

//otro ejemplo con modificacion de strings

let palabrasdiferentes = ["hola", "como", "estas"];

palabrasdiferentes.forEach((palabra, index, arr) => {
    arr[index] = palabra[0].toUpperCase() + palabra.substring(1);
});

console.log(palabrasdiferentes);

let numeros = [1,2,3,4,5];

let suma = 0;

adder = (numero) => suma += numero;

numeros.forEach(adder);

console.log(suma);

//map method crea un nuevo arreglo con los 
//resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos

//sirve para iterar sobre los valores de un arreglo y modificarlos

let numeros2 = [1,2,3,4,5];

let dobletear = numeros2.map(numero => numero*2);

console.log(dobletear);

//la diferencia es que el for each no modifica el arreglo original

const personas2 = [
    {nombre: "Sebas", edad: 20},
    {nombre: "Alex", edad: 24},
    {nombre: "Jhon", edad: 30},
];

const resultadom = personas2.map(persona => {return persona.nombre +" "+ persona.edad});

console.log(resultadom);

//filter

//sirve para filtrar elementos de un arreglo

const numeros3 = [1,2,3,4,5,6,7,8,9,10];

const filtrado = numeros3.filter(numero => numero > 5);

console.log(filtrado);

//tambien podemos usarlo para filtrar objetos

const personas3 = [
    {nombre: "Sebas", edad: 20},
    {nombre: "Alex", edad: 24},
    {nombre: "Jhon", edad: 30},
];  

const filtrado2 = personas3.filter(persona => persona.edad > 25);

console.log(filtrado2);

//find method

//sirve para encontrar un elemento en un arreglo

const numeros4 = [1,2,3,4,5,6,7,8,9,10];

const encontrado = numeros4.find(numero => numero > 5);

console.log(encontrado);

//tambien podemos usarlo para encontrar objetos

const personas4 = [
    {nombre: "Sebas", edad: 20},
    {nombre: "Alex", edad: 24},
    {nombre: "Jhon", edad: 30},
];

const encontrado2 = personas4.find(persona => persona.edad > 20);

console.log(encontrado2);

//ESO SI SOLO ENCUENTRA 1 si se repite el valor solo muestra el primero

const posts = [
    {
        id:1 , content: "good post"
    },
    {
        id:2 , content: "bad post"
    },
    { id:3, content: "meh post"},
    {
        id:4 , content: "good post"
    },
    {
        id:5 , content: "bad post"
    },
    { id:6, content: "meh post"},
];

//para encontrar mas de uno usamos filter

const encontrado3 = posts.filter(post => post.content === "good post");

console.log(encontrado3);   

//REFACTORIZACION

//sirve para hacer el codigo mas legible y mas corto

//ejemplo

function sumar(a,b)
{
    return a + b;
}
//refactorizado

const sumar2 = (a,b) => a + b;


let productos = [
    {nombre: "mouse", precio: 20, categoria: "computo"},
    {nombre: "teclado", precio: 50, categoria: "tecnologia"},
    {nombre: "monitor", precio: 100, categoria: "visual"},
    {nombre: "case", precio: 20, categoria: "computo"},
];

const filtradou = productos.filter(producto => producto.categoria === "computo");

console.log(filtradou);

// every() method

//sirve para verificar si todos los elementos de un arreglo cumplen una condicion

const nombres = ["Sebas", "Alex", "Jhonas"];

const todos = nombres.every(nombre => nombre.length > 4);

console.log(todos); //false porque no todos tienen mas de 4 caracteres

const todos2 = nombres.some(nombre => nombre.includes("a"));

console.log(todos2); //true porque todos tienen la letra a

// some() method

//sirve para verificar si alguno de los elementos de un arreglo cumple una condicion

const algunos = nombres.some(nombre => nombre.includes("a"));

console.log(algunos); //true porque algunos tienen la letra a


//reduce() method

//sirve para reducir un arreglo a un solo valor

const nms = [1,2,3,4,5];

const sumaz = nms.reduce((p,c) => {
    console.log(`valor previo ${p}`);
    console.log(`valor actual ${c}`);
    console.log(`=====${p+c}=====`);
    
    return p+c} , 0 ); //Se pone 0 al final porque ese es el valor inicial de p es decir 0 + 1 = 1 en este caso

console.log(sumaz);

//ahora lo usamos para objetos y buscar valor max

const productos2 = [
    {nombre: "mouse", precio: 60, categoria: "computo"},
    {nombre: "teclado", precio: 50, categoria: "tecnologia"},
    {nombre: "monitor", precio: 100, categoria: "visual"},
    {nombre: "case", precio: 20, categoria: "computo"},
];

const precioMasCaro = productos2.reduce((p,c) => (p < c.precio ? c.precio : p), 0);

console.log(precioMasCaro);

const palabrasrepetidas = ["hola", "hola", "como", "estas", "estas", "Queso", "Queso", "Carro", "Carro"];

const frequency = palabrasrepetidas.reduce((freqmap,word) => {
    freqmap[word] = freqmap[word] || 0 + 1;
     return freqmap;}, {});

console.log(frequency);

const numeros5 = [2,3,4,5];

const calculateprod = numeros5.reduce((p,c) => p*c, 1);

console.log(calculateprod);

//map() method

//sirve para crear un nuevo arreglo con los resultados de la 
//llamada a la funcion indicada aplicados a cada uno de sus elementos


const map = new Map();

const keyone = "string";
const keytwo = {};
const keythree = function() {};

map.set(keyone, "value of string");
map.set(keytwo, "value of object");
map.set(keythree, "value of function");

//console.log(map.keys());
//console.log(map.values());
//console.log(map.delete(keytwo));
//console.log(map.size);

console.log(map);
console.log("===========================");

for (let [key, value] of map)
{
    console.log(`key: ${key} value: ${value}`);
}
console.log("===========================");


for (let key of map.keys())
{
    console.log(key);
}

console.log("===========================");

for (let value of map.values())
{
    console.log(value);
}


console.log("===========================");


const map2 = new Map();



map2.set("a", 1);
map2.set("b", 2);
map2.set("c", 3);

console.log(map2.get("a"));
console.log(map2.size);
console.log(map2.delete("b"));
console.log(map2.size);

//set() method

//sirve para agregar un elemento a un set (no se pueden repetir elementos)
//util para lista de elementos unicos


const initialvalues = [1,2,3,4,4,4,4,3,2,1,3,5,7,8,4,5,6,7,8,9,10];
const mySet = new Set(initialvalues);

console.log(mySet);

mySet.add(11);

console.log(mySet);

console.log(mySet.has(11));

//mySet.clear(); esto borra todo el set

console.log(mySet);

for(let item of mySet)
{
    console.log(item);
}

//symbol

//sirve para crear un valor unico que no es igual a ningun otro valor

const simbolo = Symbol("simbolo");
const simbolo2 = Symbol("simbolo");

console.log(simbolo === simbolo2); //false porque son valores unicos

const foosimbol = Symbol("foo");
console.log(typeof foosimbol)

const objt = {
    firstname: "ck u",
};

objt[Symbol()] = "value for foo"; //store a symbol as the key

console.log(objt);

for (let i in objt)
{
    console.log(i);
}

