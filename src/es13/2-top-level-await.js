/*-----------------------Top level Await-----------------------*/

//Permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con async. Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.

import { products } from "./2-top-level-await-products.js";

console.log(products);
console.log("Cargado");