/*-----------------------Object.entries-----------------------*/

//Devuelve un array con elementos en forma [propiedad, valor] del objeto enviado como argumento.

const usuario1 = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

console.log(Object.entries(usuario1));
/*
[
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
]
*/

/*-----------------------Object.values-----------------------*/

//Devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const usuario2 = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

console.log(Object.values(usuario2)); // [ 'Andres', 'andres@correo.com', 23 ]

/*-----------------------Object.keys-----------------------*/

//Devuelve un array con las propiedades (keys) del objeto enviado como argumento.

const usuario3 = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

console.log(Object.keys(usuario3)); // [ 'name', 'email', 'age' ]
