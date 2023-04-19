/*-----------------------Métodos privados en clases-----------------------*/

//Consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral (#).

class Clase {
    #private(valor){ //el nombre del método es cualquiera, no necesariamente private y public
        console.log(valor);
    }

    public(valor){
        console.log(valor);
    }
}

const clase = new Clase();
clase.public("Hola");  // 'Hola'
clase.private("Hola"); // TypeError: clase.private is not a function