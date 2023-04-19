/*-----------------------Método replaceAll() para strings-----------------------*/

//Reemplaza todos los elementos que coincidan con el primer argumento por el segundo argumento.

//Resuelve el problema del método replace() que solo reemplazaba la 1ra coincidencia y tenía que usarse varias veces si se quería reemplazar varios elementos

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

console.log(mensaje.replace("JavaScript", "Python"));
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

console.log(mensaje.replaceAll("JavaScript", "Python"));
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'