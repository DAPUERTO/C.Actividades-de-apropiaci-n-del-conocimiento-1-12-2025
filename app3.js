// 3. Registro de actividades con manejo de errores
// Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
// {nombre, fecha}.
// • Usa un try...catch para validar que ambas propiedades existan.
// • Si falta alguna, lanza un error indicando que la actividad no es válida.
// • Si todo está correcto, muestra un mensaje confirmando el registro.

import { registrarActividad } from "./modules/module3.js";

// Ejemplo 1: Actividad válida con todas las propiedades
const actividadValida = {
  nombre: "Reunión de equipo",
  fecha: "2025-12-01",
};

console.log("--- Ejemplo 1: Actividad válida ---");
registrarActividad(actividadValida);

console.log(" ");

// Ejemplo 2: Actividad sin la propiedad 'fecha'
const actividadSinFecha = {
  nombre: "Capacitación",
};

console.log("--- Ejemplo 2: Actividad sin fecha ---");
registrarActividad(actividadSinFecha);

console.log(" ");

// Ejemplo 3: Actividad sin la propiedad 'nombre'
const actividadSinNombre = {
  fecha: "2025-12-02",
};

console.log("--- Ejemplo 3: Actividad sin nombre ---");
registrarActividad(actividadSinNombre);
