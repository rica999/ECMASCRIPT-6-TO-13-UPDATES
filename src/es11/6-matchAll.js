/*-----------------------Método matchAll para strings-----------------------*/

//Devuelve todas las coincidencias del string específico a partir de otro string o expresión regular

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/*
Respuesta:
[
    'Apple',
    'Apple',
    index: 0, //indica el índice en el strign donde encontro la coincidencia
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
]
[
    'Apple',
    'Apple',
    index: 21,
    input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
    groups: undefined
]
*/
const array = [...fruit.matchAll("Banana")];
console.log(array);

/*
Respuesta:
[
    [
        'Banana',
        index: 7,
        input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
        groups: undefined
    ]
]
*/