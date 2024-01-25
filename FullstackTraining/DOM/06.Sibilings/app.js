let first = document.querySelector("li");

console.log(first);

console.log(first.parentElement);

console.log(first.parentElement.parentElement);

//parent el que contiene al elemento.

//children los elementos que contiene.

const ul = document.querySelector("ul");

console.log(ul.children);

console.log(ul.children[0]); //usamos [] para acceder a un elemento en especifico. es de 0 a n-1

//asi podemos

console.log(ul.children[3].innerText = "este es el ultimo");

//siblings

console.log(first.nextElementSibling.textContent); //siguiente elemento de 1 a 2

console.log(ul.children[3].previousElementSibling.textContent); //elemento anterior de 4 a 3

