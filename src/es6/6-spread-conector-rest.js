/*-----------------------Operador de propagación (...)-----------------------*/

let person = { name: "Alexa", age: 24 };
let country = "COL";
//let data = [...person, country ]; //error por ser array. Solo se pueden copiar de array a arrays y objects a objects
let data = {...person, country }; //... permite que se copien los elementos del object person a un nuevo objeto
console.log(data); //{ name: 'Alexa', age: 24, country: 'COL' } Adiciona en su contenido el contenido del object person y el valor de country (en este caso se guarda como una propiedad-valor)

let pares = [2,4,6,8,10]; //para arrays también sirve
let copyPar = [...pares];
let paresVeinte = [...pares,12,14,16,18,20];
console.log(copyPar); //[ 2, 4, 6, 8, 10 ]
console.log(paresVeinte); //[2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

/*-----------------------Parámetro rest (resto)-----------------------*/

const array = [1,2,3,4,5];

function hola (primero, segundo, ...resto) { // Parámetro Rest (... + nombre de variable que almacenará el array). A diferencia del spread operator, este siempre va al final y guarda el resto de elementos que se pasen como argumento a la función en un array
    console.log(primero, segundo)  // 1 2
    console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación (pasa como argumentos 1,2,3,4,5)
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")

//También sirve para obtener los elementos restantes de un array u objeto usando desestructuración

const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
}
const arrayNumber = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto;
const [cero, ...positivos] = arrayNumber;

console.log(usuario); // { nombre: 'Andres', age: 23 }
console.log(positivos); // [ 1, 2, 3, 4, 5 ]