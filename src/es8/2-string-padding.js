/*-----------------------String padding-----------------------*/

//Consiste en rellenar un string por el principio o por el final, hasta que complete la longitud máxima.

//PadStar()

'abc'.padStart(10) // "       abc" //10 caracteres //si no se pasa con que rellenar, por defecto es espacio en blanco
'abc'.padStart(10, "foo") // "foofoofabc" //rellena repitiendo la palabra foo hasta llegar a 10 caracteres
'abc'.padStart(6,"123465") // "123abc" //si el string es mayor a lo que se puede rellenar, solo tomará los primeros caracteres que sumados con el string original sumen la longitud máxima
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc" //si la longitud máxima es menor a la longitud del string,imprimirá el mismo string, sin importar si se le pasa el 2do argumento.

//PadEnd()

'abc'.padEnd(10) // "abc       " //misma lógica que padStart pero aplicado en la parte final
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"