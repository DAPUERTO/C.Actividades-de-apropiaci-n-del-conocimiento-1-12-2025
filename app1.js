//  1. Gestión de pedidos con rest y destructuración
// Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente,
// producto, cantidad}.
// • Usa destructuración para obtener sus propiedades.
// • Usa parámetros rest para almacenar los extras del pedido.
// La función debe retornar un objeto final con toda la información consolidada.

import { procesarPedido } from "./modules/module1.js";

// Importamos la función procesarPedido desde el módulo usando CommonJS

// Creamos un objeto pedido con las propiedades requeridas
const pedido = {
    cliente: 'Juan Pérez',
    producto: 'Laptop',
    cantidad: 2
};

// Ejemplo 1: Procesamos el pedido sin extras adicionales
const resultado1 = procesarPedido(pedido);
console.log('Pedido sin extras:', resultado1);

// Separador visual en la consola
console.log(" ");

// Ejemplo 2: Procesamos el pedido con extras adicionales
// Los extras se capturan usando el operador rest (...extras)
const resultado2 = procesarPedido(pedido, 'Garantía extendida', 'Envío express', 'Embalaje especial');

console.log('Pedido con extras:', resultado2);
