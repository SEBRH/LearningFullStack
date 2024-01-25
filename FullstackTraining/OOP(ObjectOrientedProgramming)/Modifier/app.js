//Modifiers

//que son los modificadores?

//los modificadores son palabras reservadas que nos permiten controlar el acceso a los miembros de una clase

//los modificadores son:

//public: es el modificador por defecto, no se escribe pero esta ahi, 
//se puede acceder desde cualquier parte, dentro o fuera de la clase

//private: solo se puede acceder desde la clase que lo define

//protected: se puede acceder desde la clase
// que lo define y desde las clases que heredan de ella

//JAvascript no cuenta con estos

//pero se pueden simular

function myclass(publicfield, privatefield,protectedfield){
    this.publicfield = publicfield;

    const _privatefield = privatefield

    const _protectedfield = protectedfield;

    function _privatemethod(){
       return `private field: ${_privatefield}`;
    }

    this.publicmethod = function(){
        return `public field: ${this.publicfield}`;
    }

    function _protectedmethod(){
        return `protected field: ${_protectedfield}`;
    }
    this.accessprotected = function() {
        return _protectedmethod();
    }

    this.accessprivate = function(){
        return _privatemethod();
    }
}

const myobject = new myclass("public", "private", "protected");

console.log(myobject.publicfield);