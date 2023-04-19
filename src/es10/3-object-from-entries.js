/*-----------------------Object.fromEntries()-----------------------*/

//Devuelve un objeto a partir de un array donde sus elementos son [propiedad, valor]. Es la inversa de Object.entries()

const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
];

const usuario = Object.fromEntries(arrayEntries);

console.log(usuario); // { name: 'Andres', email: 'andres@correo.com', age: 23 }
