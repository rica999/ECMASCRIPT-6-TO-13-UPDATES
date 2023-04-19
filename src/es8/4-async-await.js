/*-----------------------Asymc-await-----------------------*/

//Nueva forma de manejar asincronismo

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) //if ternario
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error")); //método para manejar errores
    });
}

const anotherFn = async () => { //async define a una función asíncrona
    const something = await fnAsync(); // await indica que se debe esperar hasta ejecutarse la función a la que hace referencia. Para ello, tiene que estar dentro de una función asíncrona
    console.log(something);
    console.log("Hello");
}

console.log("Before");
anotherFn();
console.log("After");

//Respuesta en consola
/*Before
After
AsynC!! //espera dos segundos para ejecutarse, mientras que las otras sentencias ya se pueden ejecutar antes.
Hello*/

//Con promesas sería así:

fnAsync()
    .then(response => console.log(response)); //devuelve AsynC!! luego de 2 segundos

//En promesas para manejo de excepciones se usa .then y .catch, pero en async-await se usa try y catch().

const anotherFn2 = async () => {
    try {
        const something = await fnAsync();
        console.log(something);
        console.log("Hello");
    } catch (error) {
        console.log(error.message);
    }
}

console.log("Before");
anotherFn2();
console.log("After");

//Respuesta en consola
/*Before
After
AsynC!!
Hello*/