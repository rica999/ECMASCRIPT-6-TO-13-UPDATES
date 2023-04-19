/*-----------------------.finally en promesas-----------------------*/

//Consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada

function newPromise() {
    return new Promise((resolve,reject)=> { //atajo: colocar new y seleccionar newpromise con tab
        true ? resolve("Éxito"): reject(new Error("Fracaso"));
    })
}

newPromise()
    .then((result) => { //atajo: colocar then y seleccionar thenc con tab
        console.log(result);
    }).catch((err) => {
        console.log(err.message);
    }).finally(()=>console.log("Se terminó la promesa")); //va siempre luego de catch y no se ejecutará hasta que se ejecute then o catch

/*
Respuesta
Éxito
Se terminó la promesa
*/