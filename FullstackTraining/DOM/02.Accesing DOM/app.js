//console.dir(document);



// ************ DOM SELECTORS ************
// 1. getElementsByTagName
document.getElementsByTagName('h1');
// 2. getElementById
console.log(document.getElementById("main"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName('cls'));
// 4. querySelector
console.log(document.querySelector(".cls"));
// 5. querySelectorAll
console.log(document.querySelectorAll('.cls'));

// ---------------------------------------
// Storing data in variables

const h1 = document.querySelector('h1');

console.log(h1);


console.log(document.title);
console.dir(document.body);
console.log(document.documentURI);

// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByID
// 4. Select div which has the class & Id of "yello" by using querySelector()
// 5. Select all the elements which has the class of "teal" by using querySelectorAll

console.log(document.getElementsByTagName('h4'));
const green = document.getElementsByClassName("green");
console.log(green);
console.log(document.getElementById('blue'));
console.log(document.querySelector('#yellow'));
console.log(document.querySelectorAll('.teal'));
