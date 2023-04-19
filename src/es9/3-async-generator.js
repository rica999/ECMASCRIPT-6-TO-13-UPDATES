/*-----------------------Generadores asíncronos-----------------------*/

//Son semejantes a los generadores, pero combinando sintáxis de promesas.

async function* anotherGenerator() {
    yield await Promise.resolve(1); //cuando se devuelve algo simple se puede usar Promise.resolve(contenido) //no funciona con reject porque sale error y se tendría que cambiar a catch pero da undefined igual
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value)); //other.next() devuelve una promesa y por ende se puede usar .then seguido de next(). El resultado recibe la propiedad value de next()
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hello");

/*
Respuesta:
hello
1
2
3
*/

//Si se le quita async-await

function* anotherGenerator2() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

const another = anotherGenerator2();
another.next().value.then(response => console.log(response)); //next() es un objeto que tiene dos propiedades: value y done por defecto y ya no devolvería una promesa, por eso el value debe ir seguido de next()
another.next().value.then(response => console.log(response));
another.next().value.then(response => console.log(response));
console.log("hello");

/*
Respuesta:
hello
1
2
3
*/