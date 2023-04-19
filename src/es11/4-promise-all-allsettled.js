/*-----------------------Promise.all() - Promise.allSettled()-----------------------*/

//Promise.all()

//Sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas. Este método se resolverá si y solo sí todas las promesas fueron exitosas. Si una promesa es rechazada, Promise.all() será rechazada

const promise1 = new Promise((resolve, reject) => reject("Rechazada1"));
const promise2 = new Promise((resolve, reject) => resolve("Aceptada2"));
const promise3 = new Promise((resolve, reject) => resolve("Aceptada3"));

Promise.all([promise1, promise2, promise3])
.then(response => console.log(response))
.catch(err => console.log(err));

/*
Respuesta:
Rechazada1
*/

//Si todas las promesas fueran aceptadas daría este resultado: [ 'Rechazada1', 'Aceptada2', 'Aceptada3' ]

//Promise.allSettled()

//A diferencia de Promise.all, devolverá un array de objetos con el estado y valor de cada promesa. Está se ejecutará sin importar si alguna promesa es aceptada o rechazada (no tendrá catch)

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

/*
Respuesta:
[
    { status: 'rejected', reason: 'Rechazada1' },
    { status: 'fulfilled', value: 'Aceptada2' },
    { status: 'fulfilled', value: 'Aceptada3' }
]
*/