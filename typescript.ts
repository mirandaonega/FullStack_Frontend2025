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




