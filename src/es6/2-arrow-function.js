/*-----------------------Declaración de funciones-----------------------*/

//Antes de EC6 (Función declarativa)

function square(num) {
    return num * num;
}

//Con EC6
//Función expresiva (forma de arrow function)

const square = (num) => {
    return num * num;
}

// Arrow function resumido
const square = num => num + num; //Quitar () si sólo hay un parámetro y quitar {} y return si solo hay una línea de código en el cuerpo de la función