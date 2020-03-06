// Las plantillas de cadena de texto (template strings) son literales de texto que
// habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de
// texto de más de una línea, y funcionalidades de interpolación de cadenas de
// texto con ellas.

// Las plantillas de cadena de texto se delimitan con el caracter de comillas o
// tildes invertidas (` `) (grave accent) , en lugar de las comillas simples o
// dobles. Las plantillas de cadena de texto pueden contener marcadores,
// identificados por el signo de dólar, y envueltos en llaves (${expresión}).
// Las expresiones contenidas en los marcadores, junto con el texto entre ellas,
// son enviados como argumentos a una función. La función por defecto simplemente
// concatena las partes para formar una única cadena de texto.

let Nombre = "Maria";
let Edad = 29;
let Nacionalidad = "Venezolano";
console.log(`Hola ${Nombre}! tienes la edad de ${Edad} y eres ${Nacionalidad}`);
