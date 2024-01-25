const result = document.querySelector(".result");

async function renderData() {
    try{
        const response = await fetch("/APIS OMG/apiconjson/data.json");
        if(!response.ok) throw Error(response.statusText);
        const data = await response.json();
        console.log(data);
        result.textContent = `Nombre: ${data.name} / Edad: ${data.edad} / Hobbies: ${data.Hobbies}`
    }
    catch(error){
        console.log(error);
    }
}

renderData();

//api simple https://jsonplaceholder.typicode.com   

//fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(response => response.json())
//.then(json => console.log(json))

const btn = document.querySelector(".button");
btn.addEventListener('click', makeRequest);

function makeRequest(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok) new Error(response.statusText);
        return response.json();
    })
    .then((data) => {
        /*
        document.querySelector(".id").innerHTML = data.id;
        document.querySelector(".title").innerHTML = data.title;
        document.querySelector(".body").innerHTML = data.body;*/
        let output = document.querySelector(".allpost")
        data.forEach(element => {
            output.innerHTML += `
            <div> (ID): ${element.id}</div></br>
            <div> (Title): ${element.title}</div></br>
            <div> (Body): ${element.body}</div></br>`
        })
    })
    .catch(error => console.log(error));
}

function parseJSON(jsonstring)
{
    try{
        return JSON.parse(jsonstring);
    }catch(error)
    {
        console.log(`An error ocurred while parson json: ${error.message}`);
        return null;
    }
}

const validJson = '{"name": "Sebas", "age": 19}';
const invalidJson = '{"name": "Sebas", "age": 19,}';

const result1 = parseJSON(validJson);
const result2 = parseJSON(invalidJson);

console.log(result1);
console.log("====================================");
console.log(result2);