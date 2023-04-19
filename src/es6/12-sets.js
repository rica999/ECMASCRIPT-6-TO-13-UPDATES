/*-----------------------Sets-----------------------*/

//Estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos. Guarda los elementos entre {} pero a diferencia de un object. solo guarda valores.

const list = new Set(); //creación de un set. Se puede pasar como argumento un array

list.add("item 1"); //método add para agregar elementos al set
list.add("item 2").add("item 3");

console.log(list); //Set(3) { 'item 1', 'item 2', 'item 3' }

//Métodos del set

/*
-add(value): añade un nuevo valor.
-delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
-has(value): retorna un booleano si existe o no el valor dentro del Set.
-clear(): elimina todos los valores del Set.
-size: retorna la cantidad de elementos del Set.
*/

//Cómo quitar los elementos repetidos en una sola línea

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)] //no importa si es otra estructura, como no es un objeto, si permite copiar los elementos
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]