// ----------- BAD WAY-----------
const secondbtn = document.querySelector('.second-btn');

//secondbtn.onclick = alert("amongus");  nunca asi. se ejecuta al cargar la pagina

secondbtn.onclick = function () {console.log("amongus");
alert("Sugoma");}; //asi se ejecuta al hacer click


// ----------- GREAT WAY-----------
//usando dom

const best = document.querySelector('.best');

//syntax addeventlistener ("tipodeevento", funcion)

function funcion() {
    console.log("Hecho con event list");
    alert("Nopuedeser!");
}

best.addEventListener("click", funcion);

//usando el ES6

best.addEventListener("click", () => {best.style.backgroundColor = "teal"; best.style.color = "white";});

// ----------- Event (e) Object -----------

const p = document.querySelector('.para');

p.addEventListener("click",(event) => {
console.log(event);
});

//esto sirve para ver que evento se esta ejecutando

const form = document.querySelector("form");

const input = document.querySelector('input');

form.addEventListener("submit", (event) => {
    event.preventDefault(); //esto evita que se ejecute el evento por defecto
    console.log(input.value);
});