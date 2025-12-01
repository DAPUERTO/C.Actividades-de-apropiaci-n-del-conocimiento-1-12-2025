import { procesarPedido } from './ejercicio1-Gestion-Pedidos.js';

import PromptSync from 'prompt-sync';
// const prompt = require('prompt-sync')();


// const arreglo = [];

// while (true) {

// let numero = parseInt(prompt("ingresa un número: "));

// if (numero >= 0){

//     arreglo.push
//     continue;


// }
// break
// if(numero % 2 !== 0) {

//     console.log("El número es invalido");

//     continue;
// }
// break;

// }


// function promedio (...arreglo) {
    
//     console.log (arreglo.length);

// }

// promedio (1, 2, 3,  4, 5, 6, 7, 8);
// console.log("Fin del programa");


//==========================================================


// let arreglo = (1, 2, 3, 4);

// let arregloA=arreglo;

// arregloA.push(5, 6, 7, 8);

// console.log(arreglo);
// console.log(arregloA);   



// const usuario = () => {

//     return {
//         nombre: "Diego",
//         apellido: "Puerto",
//         usuario: "Diego123",
//         contrasena: "12345",           
//         activo: true,
//         notas: [10, 9, 8, 7, 6 ]        
//     }

// }

// let = persona = usuario();
// let { nombre, apellido, activo, notas } = persona;
// console.log (activo);





const prompt = PromptSync();


const pedido = {
    cliente: "Juan Perez",  
    producto: "Camisa",
    cantidad: 2
};
 
const extra1 = prompt("Ingrese un extra para el pedido: ");
const extra2 = prompt("Ingrese otro extra para el pedido: ");
const extra3 = prompt("Ingrese un último extra para el pedido: ");


// -----DESTRUCTURACION-----


const obj = procesarPedidos(pedido, extra1, extra2, extra3);

console.log(obj);


