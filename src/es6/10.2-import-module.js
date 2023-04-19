/*-----------------------Módulo: importar-----------------------*/

//import hello from "./10.1-export-module.js"; //En caso de que sea export default
import {hello,getData} from "./10.1-export-module.js"; //cuando se quiera importar más de un valor
//import * as myExportModule from './10.1-export-module.js'; // * para importar todos los valores de un módulo y as para cambiar el nombre de la variable importada
hello();

function solution() {
    return getData()
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

solution();