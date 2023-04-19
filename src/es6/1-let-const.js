/*-----------------------VAR-----------------------*/

//Declarar la variable lastName y asignarle el valor de "David"
var lastName = "David";
//Reasignar el valor que originalmente habiamos agregado
lastName = "Ricardo";
console.log(lastName); //Muestra "Ricardo"

/*-----------------------LET-----------------------*/

// Declarando y asignando
let fruit = "apple";
// Reasignamos ya que let tiene un alcanze de bloque
fruit = "kiwi";
console.log(fruit); //Permite la reasignación pero no la redeclaración

/*-----------------------CONST-----------------------*/

// Declarando y asignando
const animal = "dog";
// No se puede reasignar un valor a una variable tipo const
animal = "cat";
console-log(animal); //Error (No permite la redeclaración ni reasignación)

/*-----------------------SCOPE-----------------------*/

const fruits = () => {
    if(true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "kiwi";  // block scope
        const fruit3 = "banana"; // block scope
    }
    console.log(fruit1); //Leerá sin problema
    console.log(fruit2);//ERROR
    console.log(fruit3);//ERROR
}
fruits();