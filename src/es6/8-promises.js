/*-----------------------Promesas-----------------------*/

//Es una forma de manejar el asincronismo en JavaScript y se representa como un objeto

let datos = [{
    nombre : "Ricardo",
    edad : 24
}]

function readData(){
    return new Promise((resolve,reject)=>{ //declarar una promesa, el cual siempre recibe dos parámetros: resolve(cuando la promesa es resuelta.) y reject(cuando la promesa es rechazada)
        if(true){
            resolve(datos); //se le pasa como argumento lo que va a devolver si hay éxito
        }
        else{
            reject("Ocurrió un error"); //se le pasa como argumento lo que va a devolver si hay fracaso
        }
    })
}

readData()
    .then(resolve => console.log(resolve)) //then es un método que referencia a resolve. Puede haver más de uno y estosse ejecutarán en orden secuencial. Se crea cualquier variable y con el console.log leerá lo que se le pasó como argumento a resolve
    .catch(err => console.log(err)); //catch es un método que referencia a reject. Al igual que then, se crea una variable y con console.log leerá el argumento de reject.
    //No olvidar el ; al finalizar catch porque sino saldrá error.