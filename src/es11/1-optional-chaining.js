/*-----------------------Encadenamiento opcional-----------------------*/

//Si tenemos un objeto al cual se desea acceder a sus propiedades que no existen, JS retorna undefined

const usuario = {}
console.log(usuario.redes) // undefined
console.log(usuario.redes.facebook) // error //Es como acceder a undefined.facebook y undefined es un primitivo y no un objeto

//Con ?. se detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.), retornando undefined sin detener el programa por un error

const usuario2 = {}
console.log(usuario2.redes?.facebook) // undefined //Recomendable ?. usarlo solo en propiedades opcionales

//Esto se usa cuando se realiza peticiones a una BD, el objeto no tiene la información en seguida y se requiere que el programa no colapse hasta que lleguen los datos

//Para especificar el porque da undefined usar las barras horizontales ||

console.log(usuario2.redes?.facebook || "No hay datos en la BD"); //No hay datos en la BD

//console.log(usuario2.redes?.facebook ?? "No hay datos en la BD"); //es mejor usar ?? (nullish)