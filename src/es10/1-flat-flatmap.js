/*-----------------------array.flat - array.flatMap-----------------------*/

//Flat

//Devuelve un array aplanado (convertido a de un solo nivel de profundidad). Este array no cambia al array original

const array = [1,2,[3,4],5,6];
const result = array.flat(); //recibe como argumento el número de subniveles a eliminar (por defecto es 1)
console.log(result); // [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat();
console.log(result2); // [1, 2, 3, 4, [5, 6]] //elimina solo un subnivel, el más cercano al nivel 1

const array3 = [1, 2, [3, 4, [5, 6]]];
const result3 = array3.flat(2);
console.log(result3); // [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const result4 = array4.flat(Infinity); //cuando se quiera eliminar todos los subniveles se usa Infinity
console.log(result4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//FlatMap

//Es una combinación de los métodos map y flat. Primero realiza el map y luego flat. No cambia el array original. Solo aplica a arrays de un solo nivel de profundidad

const strings = ["Nunca pares", "de Aprender"];
strings.map(string => string.split(" "));
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
strings.flatMap(string => string.split(" "));
// [ 'Nunca', 'pares', 'de', 'Aprender' ]

const numbers = [1,2,3,4];
numbers.map(number => [number * 2]);
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number*2]);
// [2, 4, 6, 8]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3],4,5];
numbers2.flatMap(number => [number*2]);
// [ 2, NaN, 8, 10 ] //elementos de más niveles de profundidad dará NaN o undefined
// * Recuerda: NaN = Not a Number