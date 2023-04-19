/*-----------------------Trailing commas-----------------------*/

//Comas para separar elementos en arrays que no sean epecificados

const array1 = [24, 34, 25, 24, , , , ];
const array2 = [24, 34, 25, 24, , , , 45];
console.log(array1); // [ 24, 34, 25, 24, <3 empty items> ] ///cada coma representa un elemento vacío
console.log(array1.length); //7 //cuenta los elementos que no se han definido

console.log(array2); //[ 24, 34, 25, 24, <3 empty items>, 45 ]
console.log(array2.length); //8