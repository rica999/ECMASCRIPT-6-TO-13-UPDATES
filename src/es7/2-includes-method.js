/*-----------------------Método includes-----------------------*/

//Determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente

const saludo = "Hola mundo";

saludo.includes("Hola") // true //si fuera con minúscula la h sería false
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false //puede recibir un segundo argumento que indica el índice inicial desde donde comparar hasta el último elemento. Puede ser un número negativo
saludo.includes("mundo", -5) // true

const frutas = ["manzana", "pera", "piña", "uva"];

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true