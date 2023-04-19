/*-----------------------Método at() en arrays-----------------------*/

//Permite acceder a los elementos de un array a partir del índice, teniendo como argumento el índice, sea positivo o negativo

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

//Antes de ES13
console.log(nombres[nombres.length - 1]);  // "Richard"
console.log(nombres[-1]);  // undefined //con [] no se puede colocar directamente un índice negativo

//Con ES13
console.log(nombres.at(-1)); // "Richard"
console.log(nombres.at(-3));  // "Ana"
console.log(nombres.at(0));  // "Andres"
console.log(nombres.at(4));  // "Richard"