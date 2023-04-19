/*-----------------------For asíncrono-----------------------*/

//Es un ciclo repetitivo que se maneja asíncronamente

async function arrayOfNames(array) {
    for await (let value of array) { //luego de la palabra for
        console.log(value);
    }
}

const names = arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");

/*
Respuesta:
After
Alexa
Oscar
David
*/