/*-----------------------Método trim de strings-----------------------*/

//Elimina los espacios en blanco

const saludo = "      hola      ";
const result1 = saludo.trim();
const result2 = saludo.trimStart(); //elimina los espacios antes del string
const result3 = saludo.trimEnd(); //eliminar los espacios después del string

console.log(result1) // 'hola'
console.log(result2) // 'hola      '
console.log(result3) // '      hola'