// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 


// LECTURAS:
// https://www.w3schools.com/typescript/typescript_arrays.php
// https://www.w3schools.com/typescript/typescript_object_types.php
// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
// https://www.w3schools.com/typescript/typescript_union_types.php
// https://www.w3schools.com/typescript/typescript_functions.php


// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 
// Triple igual en comparaciones: https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness 


// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()
const nombre: string = "Miranda";
const edad: number = 22;
const esEstudiante: boolean = true;
console.log(nombre, edad, esEstudiante)



// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.
function suma(a: number, b: number): number {
    return a + b;
}
console.log("Suma:", suma(10,3))



// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
let numeros: number[] = [13, 16, 12, 89];
numeros.forEach(num => {
    console.log(num);
});



// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.
interface Persona {
    nombre: string;
    edad: number;
    esEsttudiante: boolean;
}
let persona: Persona = {nombre:"Miranda",edad:22,esEsttudiante:true}
let persona2: Persona = {nombre:"Candela",edad:23,esEsttudiante:true}
let persona3: Persona = {nombre:"Milagros",edad:23,esEsttudiante:false}




// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.
let variable: string | number;
variable = "hola";
console.log(variable)
variable = 1;
console.log(variable) 



// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}
const productos: Producto[] = [
  { nombre: "Collar", precio: 10000, enStock: true },
  { nombre: "Anillo", precio: 2500, enStock: false },
  { nombre: "Pulsera", precio: 5000, enStock: true },
  { nombre: "Aritos", precio: 1500, enStock: false },
  { nombre: "Hebilla", precio: 3200, enStock: true },
  { nombre: "Broche", precio: 3500, enStock: false }
];
function obtenerEnStock(lista: Producto[]): Producto[] {
  return lista.filter(producto => producto.enStock);
}
function obtenerSinStock(lista: Producto[]): Producto[] {
  return lista.filter(producto => !producto.enStock);
}
console.log("Productos en stock:", obtenerEnStock(productos));
console.log("Productos sin stock:", obtenerSinStock(productos));



// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
interface Cliente {
    nombre: string;
    dni: number;
    ciudad: string;
    esMinorista: boolean;
}
const clientes: Cliente[] = [
  { nombre: "Morena Peréz", dni: 44631428, ciudad: "Rosario", esMinorista: true },
  { nombre: "Gimena Ramirez", dni: 39456753, ciudad: "San Lorenzo", esMinorista: true },
  { nombre: "Martina Gonzalés", dni: 42789951, ciudad: "Rosario", esMinorista: false },
  { nombre: "Agustina Díaz", dni: 46789123, ciudad: "CABA", esMinorista: true },
  { nombre: "Candela Alfonso", dni: 35789741, ciudad: "Rosario", esMinorista: true },
  { nombre: "María Clara Robles", dni: 45612378, ciudad: "Santa Fe", esMinorista: false },
];
function obtenerEsMinorista(lista: Cliente[]): Cliente[] {
  return lista.filter(cliente => cliente.esMinorista);
}
function obtenerNoEsMinorista(lista: Producto[]): Producto[] {
  return lista.filter(cliente => !cliente.esMinorista);
}
console.log("Clientes minoristas:", obtenerEsMinorista(clientes));
console.log("Clientes mayoristas:", obtenerNoEsMinorista(clientes));



