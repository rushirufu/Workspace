// Scope
// El ambito de un variable (llamado en ingles "scope") en la zona del programa
// en la que se define una varible
// Javascript define 2 ambitos Glogal y funcion o bloque

// Explicacion var
// Las variables declaradas con var son procesadas antes de la ejecución del código.
// El scope de una variable declarada con var, es su contexto de ejecución.
// El scope de una variable declarada fuera de la función es global.
console.log("   Explicacion VAR   ");
function ExplicacionVar() {
  var a = 10;
  console.log(a); // Salida 10
  if (true) {
    var a = 20;
    console.log(a); // Salida 20 sobre-escribe el valor
  }
  console.log(a); // Salida 20
}
//console.log(a); // Error
ExplicacionVar(); // Ejecucion de la funcion.
console.log("------------------------------------");
console.log("");

console.log("   Explicacion LET   ");
function ExplicacionLet() {
  let a = 10;
  console.log(a); // Salida 10
  if (true) {
    let a = 20;
    console.log(a); // Salida 20. Se destruye la variable al salir del bloque del if
  }
  console.log(a); // Salida 10
}
ExplicacionLet();
console.log("------------------------------------");
console.log("");
console.log("   Explicacion CONST   ");
function ExplicacionConst() {
  const x = 10; // Es necesario asignarle un valor es variable " constante "
  console.log(x); // Salida 10
  //x = 20; // Error no se puede re-asigarle un valor a una variable constante
  //console.log(x);
}
ExplicacionConst();
