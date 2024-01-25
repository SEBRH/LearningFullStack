// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()



/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */



// removeChild()
// remove()
// ------------------------------------



//creating an element

const h1 = document.createElement('h1');

h1.textContent = 'I am a h1';

console.log(h1);

//agregarle stle y clases

h1.classList.add('textoagregado');

h1.style.color = 'red';

//append (agregar al documento)

body = document.body;

body.appendChild(h1);

//se agrega al final del body...

//prepend (agregar al documento)    

const ul = document.querySelector('ul');

const newli = document.createElement('li'); 

newli.innerText = 'I am a new li';

ul.prepend(newli); //prepend se pone al inicio del elemento, append al final

ul.insertBefore(newli, ul.children[3]); //insertBefore se pone en la posicion que le indiquemos

//insert ayacent element

const firstp = document.querySelector('p');

const i = document.createElement('i');

i.innerText = ' I am italic text ';
i.style.color = "blue";

firstp.insertAdjacentElement('afterbegin', i); //insertAdjacentElement se pone en la posicion que le indiquemos

//beforebegin es antes del elemento
//afterbegin es dentro del elemento
//beforeend es antes del cierre del elemento
//afterend es despues del elemento


//remove

const newlist = document.querySelector(".new-list");

const fourth = document.querySelector(".fourth");

newlist.removeChild(fourth);
