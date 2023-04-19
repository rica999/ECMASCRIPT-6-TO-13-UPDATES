/*-----------------------globalThis-----------------------*/

//Se sabe que el motor de JS al compilar el archivo crea un objeto global. Por ejemplo en el navegador es window, en Node.js es global y para un webworker es self.

//Para esandarizar el objeto global para todas las plataformas se usa globalThis.

// En el navegador
window === globalThis; // true

// En Node.js
global === globalThis; // true

console.log(globalThis); //Ene el navegador dará el objeto windoe y en Node.js dará el objeto global

/*<ref *1> Object [global] {
    global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Function: structuredClone],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: Performance {
        nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 62.522899985313416,
        nodeStart: 5.6110999584198,
        v8Start: 12.281399965286255,
        bootstrapComplete: 44.76199996471405,
        environment: 24.703499972820282,
        loopStart: 55.496999979019165,
        loopExit: -1,
        idleTime: 0.0699
        },
        timeOrigin: 1681866835263.342
    },
    fetch: [AsyncFunction: fetch]
}
*/