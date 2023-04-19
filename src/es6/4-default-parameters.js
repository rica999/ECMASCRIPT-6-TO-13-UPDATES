/*-----------------------Parámetros por defecto en funciones-----------------------*/

//Antes de ES6

function newUser(name, age, country) {
    var name = name || "Alexa";
    var age = age || 24;
    var country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX");

//Con ES6

function newAdmin(name = "Alexa", age = 24, country = "COL") {
    console.log(name, age, country);
}

newAdmin()
newAdmin("Ricardo", 34, "PE");