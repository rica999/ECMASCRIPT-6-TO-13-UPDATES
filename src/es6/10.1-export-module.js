/*-----------------------Módulo: exportar-----------------------*/

const hello = () => { //No se puede colocar el export default antes de funciones expresivas. Solo en funciones declarativas //Pero si se puede colocar export antes de ambos tipos de funciones
    console.log("Hello!");
}
//export default hello; //En caso solo se exporte una solo valor se usa el export default
export {hello} //Se pueden agregar más de un valor, por ejemplo export {hello, otraFuncion, ...}

/*No olvidar agregar "type": "module" en el package.json o cambiar la extensión .mjs a los archivos que importan y exportan*/

function getData() {
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