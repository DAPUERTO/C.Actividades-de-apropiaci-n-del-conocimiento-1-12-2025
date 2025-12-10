// 6. Análisis de ventas con destructuración profunda
// Dado este arreglo:
// const ventas = [
//   { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
//   { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
// ];
// Crea una función que emplee destructuración anidada para obtener precio y unidades del
// primer producto, y retorne el total vendido (precio × unidades).

import { calcularTotalPrimerProducto } from "./modules/module6.js";

// Arreglo de ventas
const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } },
];

// Ejemplo 1: Calcular total del primer producto
console.log("--- Análisis de ventas ---");
console.log("Ventas:", ventas);
console.log(" ");

const total = calcularTotalPrimerProducto(ventas);
console.log("Total vendido del primer producto:", total);

console.log(" ");

// Ejemplo 2: Con diferentes productos
const ventas2 = [
  { producto: "laptop", detalles: { precio: 1200, unidades: 2 } },
  { producto: "monitor", detalles: { precio: 300, unidades: 4 } },
];

console.log("--- Análisis de ventas 2 ---");
console.log("Ventas:", ventas2);
console.log(" ");

const total2 = calcularTotalPrimerProducto(ventas2);
console.log("Total vendido del primer producto:", total2);
