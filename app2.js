/*2. Control de inventario con inmutabilidad y spread
Partiendo del arreglo inicial:
const inventario = ["cámara", "trípode", "micrófono"];
Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
inventario.*/


// Importamos la función agregarInventario desde el módulo 
import { agregarInventario } from "./modules/module2.js";


// Importamos prompt-sync para capturar entrada del usuario
import PromptSync from "prompt-sync";

const prompt = PromptSync();

// Inventario inicial
const inventario = ["cámara", "trípode", "micrófono"];

// Mostramos el inventario inicial
console.log("Inventario inicial:", inventario);
console.log("Cantidad de ítems:", inventario.length);
console.log(" ");

// Solicitamos al usuario un nuevo item
let nuevoItem = prompt("Ingrese un nuevo item: ");

// Agregamos el nuevo item al inventario (sin modificar el original)
const nuevoInventario = agregarInventario(inventario, nuevoItem);

// Mostramos el inventario original (sin cambios)
console.log("\nInventario original (sin cambios):", inventario);
console.log("Cantidad de ítems:", inventario.length);

// Mostramos el nuevo inventario
console.log("\nNuevo inventario:", nuevoInventario);
console.log("Cantidad de ítems:", nuevoInventario.length);