// 8. Fusión de colecciones y validación final
// Crea una función fusionarColecciones(lista1, lista2) que:
// • Use spread para fusionar las dos listas sin mutarlas.
// • Valide dentro de un try...catch que ambas listas sean arreglos.
// • Si no lo son, lanza un error personalizado.
// • Retorna la colección final.

import { fusionarColecciones } from "./modules/module8.js";

// Ejemplo 1: Dos arreglos válidos
console.log("--- Ejemplo 1: Dos arreglos válidos ---");
const lista1 = ["manzana", "banana", "naranja"];
const lista2 = ["uva", "pera", "sandía"];
console.log("Lista 1:", lista1);
console.log("Lista 2:", lista2);
const fusion1 = fusionarColecciones(lista1, lista2);
console.log("Colección fusionada:", fusion1);

console.log(" ");

// Ejemplo 2: Primera lista no es un arreglo
console.log("--- Ejemplo 2: Primera lista no es arreglo ---");
const noLista1 = "esto no es un arreglo";
const lista3 = ["elemento1", "elemento2"];
console.log("Lista 1:", noLista1);
console.log("Lista 2:", lista3);
const fusion2 = fusionarColecciones(noLista1, lista3);
console.log("Resultado:", fusion2);

console.log(" ");

// Ejemplo 3: Segunda lista no es un arreglo
console.log("--- Ejemplo 3: Segunda lista no es arreglo ---");
const lista4 = [1, 2, 3];
const noLista2 = { a: 1, b: 2 };
console.log("Lista 1:", lista4);
console.log("Lista 2:", noLista2);
const fusion3 = fusionarColecciones(lista4, noLista2);
console.log("Resultado:", fusion3);

console.log(" ");

// Ejemplo 4: Ninguna es un arreglo
console.log("--- Ejemplo 4: Ninguna es arreglo ---");
const noLista3 = 123;
const noLista4 = true;
console.log("Lista 1:", noLista3);
console.log("Lista 2:", noLista4);
const fusion4 = fusionarColecciones(noLista3, noLista4);
console.log("Resultado:", fusion4);

console.log(" ");

// Ejemplo 5: Arreglos con diferentes tipos de datos
console.log("--- Ejemplo 5: Arreglos mixtos ---");
const lista5 = [1, 2, 3];
const lista6 = ["a", "b", "c"];
console.log("Lista 1:", lista5);
console.log("Lista 2:", lista6);
const fusion5 = fusionarColecciones(lista5, lista6);
console.log("Colección fusionada:", fusion5);

// Verificamos que las listas originales no se modificaron
console.log(" ");
console.log("--- Verificación de inmutabilidad ---");
console.log("Lista 1 original (sin cambios):", lista1);
console.log("Lista 2 original (sin cambios):", lista2);
