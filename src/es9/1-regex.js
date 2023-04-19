/*-----------------------Regular expresions o expresiones regulares-----------------------*/

//Son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente

const regex = /(\d{4})-(\d{2})-(\d{2})/; //el patrón va entre /
const matchers1 = regex.exec("2022-01-01"); //exec permite validar un string con la expresión regular almacenada en la variable regex //por defecto si está bien matchers1 sería un array
const matchers2 = regex.exec("01-01-2022"); //si falla, devuelve un null
console.table(matchers1); //muestra el resultado en una tabla de dos columnas

/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-01-01' │
│    1    │    '2022'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2022-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘
*/

console.table(matchers2); //null