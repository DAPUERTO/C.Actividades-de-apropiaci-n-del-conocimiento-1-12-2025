// 7. Evaluación de datos con try...catch + spread
// Escribe una función evaluar(...valores) que:
// • Reciba varios números mediante rest.
// • Use un try...catch para verificar que todos sean numéricos.
// • Si encuentra un valor no numérico, captura el error y muestra un mensaje adecuado.
// • Si todo es válido, crea una nueva lista (sin mutar la original) y retorna el promedio.

import { evaluar } from "./modules/module7.js";

// Ejemplo 1: Todos los valores son numéricos
console.log("--- Ejemplo 1: Valores válidos ---");
const promedio1 = evaluar(10, 20, 30, 40, 50);
console.log("Promedio:", promedio1);

console.log(" ");

// Ejemplo 2: Valores mixtos (con un string)
console.log("--- Ejemplo 2: Valores con un string ---");
const promedio2 = evaluar(10, 20, "treinta", 40, 50);
console.log("Promedio:", promedio2);

console.log(" ");

// Ejemplo 3: Valores mixtos (con un booleano)
console.log("--- Ejemplo 3: Valores con un booleano ---");
const promedio3 = evaluar(15, 25, true, 35);
console.log("Promedio:", promedio3);

console.log(" ");

// Ejemplo 4: Solo valores válidos
console.log("--- Ejemplo 4: Más valores válidos ---");
const promedio4 = evaluar(100, 200, 300);
console.log("Promedio:", promedio4);

console.log(" ");

// Ejemplo 5: Valores con null
console.log("--- Ejemplo 5: Valores con null ---");
const promedio5 = evaluar(5, 10, null, 20);
console.log("Promedio:", promedio5);
