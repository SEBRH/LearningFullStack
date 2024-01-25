//que es async

//es una funcion que devuelve una promesa

//para que sirve?

//para manejar el asincronismo

//es decir funciona como un callback pero con una sintaxis mas limpia

//AWAIT (solo se puede usar dentro de un async)
/*
console.log("start");

function fetchDatafromServer()
{

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("User data recieved from server. (Esta es la data lol)");
        }, 4000);
    }); 
}

//el codigo de arriba representa un fetch de api

async function getUserData()
{
    try {
        let data = await fetchDatafromServer();
        console.log(data);
        console.log("remaining task can be executed here aca seguimos haciendo lo que debamos hacer con la data");
        data += " - processed";
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUserData().then().catch();
*/
//refactor method

function CallbackHell(){
    return new Promise ((resolve)=>{
        setTimeout(() => {
           const data = `inside callback hell function`;
           console.log(data);
           resolve(data); 
        }, 2000);
    });
}

function firstFunc(data)
{
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedID = `${data} - processed first`;
            console.log("Inside first func function");
            resolve(processedID);
        })
    },1000)
}

function secondFunc(data)
{
    return new Promise((resolve) => {
    setTimeout(()=>{
        const processedData = `${data} - Processed Second`;
        console.log(`Inside second func function`);
        resolve(processedData);
        },1000)
    })
}

async function processedDataWithAsync()
{
    try{
        console.log(`gaaaa`)
        const data = await CallbackHell();
        const processedData1 = await firstFunc(data);
        const processedData2 = await secondFunc(processedData1);
        console.log(`Final Result: ${processedData2}`)

    } catch(error){
        console.log(`Error: ${error}`);
    }
}

processedDataWithAsync().then().catch();

// --------------------------------------------------
// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Football", "Singing", "Solving Math"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("HuXn")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// --------------------------------------------------

console.log("start");

function getuserdatafromDB(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("getting user name...");
            resolve(name);
        }, 5000);

    })
}

function getuserHobbies(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("getting user hobbies...");
            resolve(["coding","gaming","reading"]);
        },5000)
    });
}

async function getuserdatas(){
    try{
        
        const name = await getuserdatafromDB("Juan");        
        console.log(name);
        const hobbies = await getuserHobbies(name);
        console.log(hobbies);
    }
    catch(error){
        console.log(error);
    }
}

getuserdatas().then().catch();

