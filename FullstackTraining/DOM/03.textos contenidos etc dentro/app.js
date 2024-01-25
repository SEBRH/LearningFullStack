// innerText

const p = document.querySelector("p");
console.log(p.innerText);
console.log("=========================================================")
// textContent
console.log(p.textContent);
// innerHTML
console.log(p.innerHTML);


const h1 = document.querySelector("h1");

h1.innerText = "Text Changed omaiga";

h1.innerHTML += "<em>123</em>"