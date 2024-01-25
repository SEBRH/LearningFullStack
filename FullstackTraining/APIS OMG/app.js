console.log(fetch("/APIS OMG/texto.txt")); //fetch devuelve una promesa //no olvides especificar de donde sale el doc

//callback
//promise 
//async await

const texto = document.querySelector(".result")

fetch("/APIS OMG/texto.txt")
.then(res => {
    if(!res.ok) throw Error(res.statusText); //throw error es para que el catch lo agarre
    return res.text()})
.then(data => { 
    texto.textContent = data;
    texto.style = "color: red; font-size: 50px;"

    return console.log(data)})
.catch(error => console.log(error));

//res.text() devuelve una promesa

//text method retorna promesa si se resuelve devuelve un string

//fetch api tira error cuando hay problemas con el la red 

async function renderdata()
{
    try{
    const response = await fetch("/APIS OMG/texto.txt");
    if(!response.ok) throw Error(response.statusText);
    const data = await response.text(); 
    texto.textContent = data;
    console.log(data);
    console.log("====================================");
    } catch(error){
        console.log(error);
    }
}

renderdata();