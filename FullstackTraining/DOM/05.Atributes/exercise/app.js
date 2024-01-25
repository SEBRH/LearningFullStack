// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const anchor = document.querySelector("a");

console.log(anchor.getAttribute("href")); //conseguimos el valor del atributo. //revisa el tipo de atributo

const atwo = document.querySelector(".a-two");

atwo.setAttribute("href", "https://www.google.com");
