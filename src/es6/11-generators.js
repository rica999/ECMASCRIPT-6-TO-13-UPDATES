/*-----------------------Generadores-----------------------*/

//Son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

function* iterate(array)  { //colocar * al lado de function define un generador
    for (let value of array) {
        yield value; //solo funciona en generadores. Pausa la función y devuelve el valor que se tiene hasta ese momento. Puede haber más de 1.
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);

console.log(it.next().value); //Oscar //next() es un método que devuelve un objeto cuyas propiedades son value (para el valor de yield) y done (valor true si ya se terminó la ejecución total de la función o false si aún falta)
console.log(it.next().value); //Alexa //por cada invocación la función se reanuda desde el último yield
console.log(it.next().value); //David
console.log(it.next().value); //Ulises
console.log(it.next().value); //undefined //si ya no hay nada que recorrer, es decir, ya se ejecutó totalmente la función