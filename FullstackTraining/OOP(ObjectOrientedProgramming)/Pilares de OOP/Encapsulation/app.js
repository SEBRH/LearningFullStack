//que es encapsulation?

//encapsulation es el proceso de ocultar los detalles de implementacion de un objeto

//para que sirve?

//para que el usuario no pueda acceder a los datos de un objeto

//como se hace?

//con modificadores de acceso

//ejemplo

function counter()
{
    let _count = 0;//private

    this.increment = function () { //public that modifies private
        _count++;
    }

    this.decrement = function () { //public that modifies private
        _count--;
    }

    this.getCount()
    {
        return _count;

    }
}

//basicamente en el ejemplo el count esta en 0 , por medio de metodos publicos se puede modificar el count
//pero no se puede acceder a el directamente

