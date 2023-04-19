/*-----------------------Concatenación de strings-----------------------*/

//Antes de EC6

let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase)

//Con EC6 (Template literals)

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

/*-----------------------Multi-line strings-----------------------*/

//Antes de EC6

let loren = "Esto es un string \n" + "esto es otra línea";

//Con EC6 (Template literals)

let loren2 = `Esta es una frase épica
la continuación de esa frase épica.
`;

console.log(loren);
console.log(loren2);