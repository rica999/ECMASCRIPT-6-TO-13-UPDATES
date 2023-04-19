/*En este desafío tendrás un archivo llamado api.js que estará al mismo nivel que tu archivo exercise.js.

Este archivo tendrá una función asíncrona getData() que te retornará una lista de resultados misteriosa.

Tu función solution() deberá retornar la misma lista de resultados que te brinda la función getData().

Input:

solution();

Ouput:

[{
    movie: "El despertar de los michis",
    year: 2021,
    protagonist: "Mr. Michi"
}, {
    movie: "101 Michis",
    year: 2019,
    protagonist: "Tommy Michiguire"
}]*/

/*exercise.js*/
import { getData } from "./api.js"

export function solution() {
    return getData()
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

solution();

/*api.js*/
export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}

export {getData}