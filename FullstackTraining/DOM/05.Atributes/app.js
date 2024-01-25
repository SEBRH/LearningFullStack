// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

//conseguimos valores

const a = document.querySelector("a");

console.log(a.href);

const input = document.querySelector("input");

console.log(input.value);

//input.type = "checkbox";

//set attribute

a.href = "https://www.google.com";

console.log((input.value = "checkbox"));
console.log(input.placeholder = "metele texto"); //para ver borra lo que esta dentro.

//getting atributes

console.log(input.getAttribute("type"));

console.log(input.getAttribute("placeholder"));

//setting atributes

input.setAttribute("type", "password");

input.setAttribute("placeholder", "metele texto");

