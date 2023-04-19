//Instalar primero el paquete node-fetch de npm para usar fetch (permite hacer peticiones al servidor)

import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products"); //conexión a una api //await para esperar a que se reciba toda la información
const products = await response.json(); //convierte todos los datos obtenidos en formato json para una mejor visualización

export {products};

