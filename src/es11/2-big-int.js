/*-----------------------BigInt-----------------------*/

//Permite manejar números enteros muy grandes, incluso fuera de los límites de enteros de JS.

//Antes de ES11

const number1 = 45n; //se colocaba una n al final del entero para definirlo como un entero grande
console.log(typeof number1); //bigint

//Con ES11

const number2 = BigInt(45);
console.log(typeof number2); //bigint

//Con BigInt se puede manejar números enteros fuera de los límites de enteros de JS, ya que sin él, los cálculos matemáticos salían mal

const max = Number.MAX_SAFE_INTEGER //entero máximo de JS
const min = Number.MIN_SAFE_INTEGER //entero mínimo de JS

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992 //mal
console.log(bigInt) // 9007199254740993n //bien
