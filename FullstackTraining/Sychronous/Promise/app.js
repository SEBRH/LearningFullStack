//Promise

//que es?

//es un objeto que representa la terminacion o el fracaso de una operacion asincrona

//para que sirve?

//para manejar el asincronismo

//tiene 3 estados

//pending: inicial

//fulfilled: exito
//then, finally
//rejected: fracaso
//then, catch, finally

//syntax : new Promise((resolve, reject) => {resolve()});



function checknumbrer(number)
{
return new Promise((resolve, reject) => {
    if(number % 2 === 0)
    {
        resolve(`${number} es par`)
    }
    else
    {
        reject(`${number} es impar`)
    }
});
}

const numerou = 2;

checknumbrer(numerou).then((message) => {console.log(`Sucess ${message}`);})
.catch((message) => {console.log(`Error ${message}`);});

//Refactorizando

/*
console.log("start");

function getuserdatafromDB(name, callback)
{
    setTimeout(() => {
        console.log("Gettng user name...");
        callback(name)
    }, 2000);
}

function getuserHobbies(name, callback)
{
    setTimeout(() => {
        console.log("Getting user hobbies...");
        callback(["coding", "gaming", "reading"]);
    },2000);
}

getuserdatafromDB("Juan", (data) => {
    console.log(data);
    getuserHobbies(data, (hobby) => {
        console.log(hobby);
        
        });
});

console.log("end");
*/
//Refactorizando con promesas

console.log("start");

function getuserdatafromDB(name) {

    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            console.log("Getting name");
            resolve(name);
        },2000);
    
    });

};

function getuserHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user hobbies...");
            resolve(["coding", "gaming", "reading"]);
        },2000);
    });
};

getuserdatafromDB("Juan")
.then((name)=> console.log(name))
.then((name) => getuserHobbies(name))
.then((hobbies) => console.log(hobbies))
.catch((error) => console.log(error))

console.log("end");
