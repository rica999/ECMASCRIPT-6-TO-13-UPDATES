/*-----------------------Nullish (??)-----------------------*/

//Consiste en evaluar una variable si es undefined o null para asignarle un valor.

const usuario1 = {};
const nombre1 = usuario1.name ?? "Andres"; //se lee: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Andres", caso contrario asigna el valor de usuario.name.

const usuario2 = {name: "Juan"};
const nombre2 = usuario2.name ?? "Andres";

console.log(nombre1) // 'Andres'
console.log(nombre2) // 'Juan'

//Ojo quepodría usarse || en lugar de ??, pero || sólo evalúa valores falsy y podría cambiar el resultado esperado.

const id = 0;

const orId = id || "Sin id";
const nullishId = id ?? "Sin id";

console.log( orId ); // 'Sin id' //No es null o undefined pero toma su valor falsy. Es un error para este caso
console.log( nullishId ); // 0

let x = BigInt(4);

console.log(x+=5n);