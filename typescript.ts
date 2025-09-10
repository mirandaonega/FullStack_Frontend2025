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



//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
//Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
interface Producto2 {
    nombre: string;
    precio: number
}
let catalogo: Producto2[] = [
    {nombre: "Remera", precio: 20000},
    {nombre: "Jean negro", precio: 40000},
    {nombre: "Buzo", precio: 45000},
    {nombre: "Campera", precio: 35000}
]
catalogo.forEach((producto) => {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});



//Ejercicio 9: Catálogo de Productos - filter
//Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
//Imprimor productosBaratos en la consola.
const productosBaratos: Producto2[] = catalogo.filter(producto => producto.precio < 30000);
console.log("Productos baratos (< $50):", productosBaratos);



//Ejercicio 10: Actualización de Inventario - map
//Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
//Imprimir catalogoConDescuento en la consola.
const catalogoConDescuento: Producto2[] = catalogo.map(producto => ({
  ...producto,
  precio: producto.precio * 0.9
}));
console.log("Catálogo con 10% de descuento:", catalogoConDescuento);



//Ejercicio 11: Búsqueda de Usuario - find
//Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
//Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
//Imprimir en la consola el objeto del usuario encontrado.
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}
const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Carlos", activo: false },
  { id: 3, nombre: "María", activo: true },
  { id: 4, nombre: "Juan", activo: false }
];
const usuarioEncontrado = usuarios.find(usuario => usuario.id === 3);
console.log(usuarioEncontrado);



//Ejercicio 12: Contador de Usuarios Activos - filter y length
//Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
//Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 
const usuariosActivos = usuarios.filter(usuario => usuario.activo);
console.log("Cantidad de usuarios activos:", usuariosActivos.length);



//Ejercicio 13: Actualización de Estado de Usuarios
//Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
//Imprimir el array usuarios para verificar que todos los usuarios están inactivos.
usuarios.forEach(usuario => {
  usuario.activo = false;
});
console.log(usuarios);



//Ejercicio 14: Formateo de Productos para Mostrar - map
//Usar el array catalogo.
//Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
//Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
//Imprimir el array productosFormato en la consola.
let productosFormato = catalogo.map(producto => 
  `Producto: ${producto.nombre}, Precio: $${producto.precio}`
);
console.log(productosFormato);



//Ejercicio 15:
//Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:
interface User {
    name: string;
    age: number;
    occupation: string;
}

//Código dado
const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(logPerson);



//Ejercicio 16:
//Vamos a volver a usar la interfaz User del ejercicio anterior.
//Crear una nueva interfaz Admin segun los datos que tenemos.
//Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
//Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 
interface Admin {
    name: string;
    age: number;
    role: string;
}

//Código dado
type Person = User | Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User|Admin) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
