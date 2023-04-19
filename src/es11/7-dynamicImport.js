/*-----------------------Dynamic Import-----------------------*/

//Con import() se permite manejar módulos dinámicamente, ya que con import...from... no se puede.

//Esto permite cargar mpodulos cuando el usuario los vaya a utilizar y no al iniciar la aplicación. Con ello la página web es más rápida, porque descarga menos recursos.

const button = document.getElementById("btn");

//Con la sintaxis de async-await

button.addEventListener("click", async function () {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
})

//Con la sintaxis de una promesa

button.addEventListener("click", () => {
    import("./7-dynamicImportModule.js")
        .then(modulo => {
            modulo.hello();
        })
    }
);