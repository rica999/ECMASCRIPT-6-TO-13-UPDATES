/*-----------------------Clases-----------------------*/

//Es una plantilla que tiene atributos (datos/variables) y métodos (acciones/funciones) y desde la cual se pueden crear objetos.

class User { //declaración de una clase
    //Constructor
    constructor(name, age) { //constructor es un método que se ejecuta automáticamente al instanciar un objeto a una clase
        this.name = name,
        this.age = age
    }

    //Métodos de la clase
    speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`; //this es un objeto. Aquí hace referencia al valor asignado en el constructor.
    }

    //Getters y Setters
    get getAge() {
        return this.age; //Obtenemos el valor de "Age"
    }

    set setAge(n) {
        this.age = n; //Seteamos un nuevo valor en "Age"
    }
}

const ana = new User("Ana", 25); //Creamos un nuevo usuario (objeto) que hereda las propieades y métodos de la clase User
console.log(ana.greeting()); //Hello Ana. //Accedemos al usuario ana y a su metodo Greeting
console.log(ana.getAge); //25 //Accedemos al usuario ana y a su Getter
console.log(ana.setAge = 30); //30 //Accedemos al usuario ana y a su Setter