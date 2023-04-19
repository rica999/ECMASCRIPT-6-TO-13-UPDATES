/*-----------------------Desestructuración-----------------------*/

// Array destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits; //Guarda en ese arreglo los valores de los valores del array fruits
let {1:fruta2} = fruits;//Si necesitas un elemento en cierta posición, como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando un nombre para la variable.
// Opcion 1
console.log(a, b);//Apple Banana
// Opcion 2
console.log(a, fruits[1]);//Apple Banana
// Opcion 3
console.log(fruta2); //Banana

// Object destructuring

let user = { username: "Alexa", age: 34 };
let { username, age } = user; //Guarda en las propiedades de ese objeto los valores del object user. Las propiedades tienen que ser las mismas que la del objeto user, sino da undefined
let { username:nombre, age:edad } = user; //Se puede cambiar el nombre de las propiedades usando : + (nuevo nombre)
// Opcion 1
console.log(username, age); //Alexa 34
// Opcion 2
console.log(username, user.age); //Alexa 34
// Opcion 3
console.log(nombre, edad); //Alexa 34