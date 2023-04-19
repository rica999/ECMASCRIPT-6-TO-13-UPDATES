/*-----------------------Mejora de objeto literal-----------------------*/

//Consiste en crear objetos a partir de variables sin repetir el nombre.

//Antes de ES6

function newUser1(user, age, country, uId) {
    return {
        user : user,
        age : age,
        country : country,
        id: uId
    }
}

console.log(newUser1("bndx", 24, "COL", 1)); //{ user: 'bndx', age: 24, country: 'COL', id: 1 }

//Con ES6

function newUser2(user, age, country, uId) {
    return {
        user, //ya no es necesario igualar la propiedad al parámetro con el mismo nombre de la función. Esto si son iguales.
        age,
        country,
        id: uId //si son diferentes, si se tiene que asignarle el valor del parámetro
    }
}

console.log(newUser2("bndx", 24, "COL", 1)); //{ user: 'bndx', age: 24, country: 'COL', id: 1 }