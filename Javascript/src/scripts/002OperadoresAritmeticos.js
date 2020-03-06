/**
 *
 *  Operadores Aritméticos
 *      - + / *
 */

let year = 2020;
let yearJhon = 1990;
let result = year - yearJhon; // resta
console.log(`Edad de Jhon es de ${result}`);

year = year + 2; // Suma
console.log(year);

year = year * 2; // Multiplicacion
console.log(year);

year = year / 2; // Division
console.log(year);

let residuo = 12 % 5; // Resto o Residuo
console.log(`Residuo de la division ${residuo}`);

let Exponenciacion = 2 ** 4; // Exponenciación
console.log(`Resultado de la Exponenciacion  ${Exponenciacion}`);

// let error = -2 ** 2; Esto no es válido en JavaScript, ya que la operación es ambigua.
let correcto = (-2) ** 2; // 4
console.log(correcto);

/**
 *
 *  Operadores Unarios
 *
 */

//          Incremento (++)
//      Operador: x++ o ++x
// El operador de incremento incrementa (agrega uno a) su operando y devuelve un valor.

// Si se usa postfijo, con el operador después del operando (por ejemplo, x++), devuelve el valor antes de incrementar.
// Si se usa prefijo, con el operador antes del operando (por ejemplo, ++x), devuelve el valor después de incrementar.

// Postfijo
let x = 10;
let r = x++; //  x = 11 y = 10,
console.log(`Postfijo x=${x} r=${r}`);

// Prefijo
let a = 1;
let b = ++a; // a = 2, b = 2
console.log(`Prefijo a=${a} b=${b}`);

//          Decremento (--)
//      Operador: x-- o --x
//El operador de decremento disminuye (resta uno de) su operando y devuelve un valor.

//Si se usa postfijo (por ejemplo, x--), devuelve el valor antes de decrementar.
//Si usa el prefijo (por ejemplo, --x), entonces devuelve el valor después de decrementar.

// Postfijo
let c = 3;
let d = c--; // c = 2, d = 3
console.log(`Postfijo c=${c} d=${d}`);

// Prefijo
let e = 2;
let f = --e; // a = 1, b = 1
console.log(`Postfijo e=${e} f=${f}`);

//          Negación unaria (-)
//      Operador: -x
//El operador de negación unaria precede su operando y lo niega

let unariaNegativo = 3;
let rUnarioNeg = -unariaNegativo;
console.log(
  `Negacion unaria. Valor original: ${unariaNegativo} Resultado ${rUnarioNeg}`
);

// el operador de negación unario puede convertir no-números en un número
let unariaNegativo2 = "4"; // esto es un string
let tipoDeDato = typeof unariaNegativo2; //
console.log(`Esta variable ${unariaNegativo2} es de tipo: ${tipoDeDato}`);
tipoDeDato = undefined;
console.log(`Limpiando la variable: ${tipoDeDato}`);

let rUnuario2 = -unariaNegativo2; // Negacion de un string
tipoDeDato = typeof rUnuario2; // Lo convierte a un numero
console.log(`Esta variable ${rUnuario2} es de tipo: ${tipoDeDato}`);

//      Unario más (+)
//  Operador: +x
// El operador unario más precede su operando y evalúa su operando, pero intenta
// convertirlo en un número, si no lo está. Aunque la negación unaria (-) también
// puede convertir no números, unario plus es la manera más rápida y preferida de
// convertir algo en un número, porque no realiza ninguna otra operación en el número.
// Puede convertir representaciones de cadenas de enteros y flotantes, así como los
// valores que no sean cadenas true, false y null. Se admiten enteros en formato
// decimal y hexadecimal ("0x" -prefijado). Los números negativos son compatibles
// (aunque no para hexadecimal). Si no puede analizar un valor particular, evaluará a NaN.

let unarioMas = +3; // 3
console.log(`+3 = ${unarioMas}`);

unarioMas = +"3"; // 3
console.log(`string "+3" = ${unarioMas}`);

unarioMas = +true; // 1
console.log(`+true = ${unarioMas}`);

unarioMas = +false; // 0
console.log(`+false = ${unarioMas}`);

unarioMas = +null; // 0
console.log(`+null = ${unarioMas}`);

/**
 *
 *  Operadores relacionales
 *
 */
