console.log(window); // esto es el objeto global de JS 

console.log(this); // esto es el objeto global de JS tambien.. (lo mismo que window)

window.firstname = "John"; // esto es lo mismo que window.firstname = "John";

console.log(firstname); // John

window.lastname = "Doe";

console.log(lastname)   // Doe


// -------------------------------------


function print()
{
   return(this);  
}

const pr = print();

console.log(pr); // window 

// -------------------------------------

const objeto = {
    nombre: "John",
    apellido: "Doe",
    nombreCompleto: function(){ //No usar arrow function en metodos de objetos porque no funciona el this 
        return(this.nombre + " " + this.apellido);
    }
}

console.log(objeto.nombreCompleto()); // John Doe

