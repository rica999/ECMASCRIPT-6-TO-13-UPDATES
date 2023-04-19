/*-----------------------Promise.any-----------------------*/

//Recibe como argumento un array de promesas. Este método retornará la primera promesa que sea resuelta y arrojará un error si todas las promesas son rechazadas.

const promise1 = new Promise((rs, rj) => rj("Rechazada1"));
const promise2 = new Promise((rs, rj) => rs("Aceptada2"));
const promise3 = new Promise((rs, rj) => rs("Aceptada3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(err => console.log(err));
//Respuesta: Aceptada2

const promise4 = new Promise((resolve, reject) => reject("Rechazada4"));
const promise5 = new Promise((resolve, reject) => reject("Rechazada5"));
const promise6 = new Promise((resolve, reject) => reject("Rechazada6"));

Promise.any([promise4, promise5, promise6])
    .then(response => console.log(response))
    .catch(err => console.log(err));

/*
Respuesta:
[AggregateError: All promises were rejected] {
    [errors]: [ 'Rechazada4', 'Rechazada5', 'Rechazada6' ]
}
*/