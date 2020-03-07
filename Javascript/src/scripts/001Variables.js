var nombre = "Maria"; // string
console.log(nombre);

var edad = "30";
console.log(edad);

var variableNoDefinida, otraVariable; // undefined - variable no definida
console.log(variableNoDefinida, otraVariable); //
variableNoDefinida = "Variable ya esta definida como string";
console.log(variableNoDefinida);

var esMayorDeEdad = true;
console.log(esMayorDeEdad);

// Variable mutation
esMayorDeEdad = false;
console.log(esMayorDeEdad);

var entrada = prompt("cual es tu nombre");
console.log(entrada);
///////////////////////
if (true) {
  var name = "Matt";
  console.log(name);
}
console.log(name); // Matt
if (true) {
  let age = 26;
  console.log(age);
}
console.log(age); // 26
// Matt
// ReferenceError: age is not defined
