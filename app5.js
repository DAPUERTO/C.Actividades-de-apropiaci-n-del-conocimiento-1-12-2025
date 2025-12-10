// 5. Actualización de perfiles con inmutabilidad + rest
// Crea una función actualizarPerfil(perfil, ...nuevosDatos).
// Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad: "Medellín"}.
// • Combina todos los datos usando inmutabilidad y spread.
// Retorna el nuevo perfil completo.

import { actualizarPerfil } from "./modules/module5.js";

// Perfil inicial
const perfil = {
  nombre: "Carlos Gómez",
  edad: 25,
  ciudad: "Bogotá",
  profesion: "Desarrollador",
};

// Ejemplo 1: Actualizar sin nuevos datos
console.log("--- Ejemplo 1: Sin actualizaciones ---");
console.log("Perfil original:", perfil);
const perfilActualizado1 = actualizarPerfil(perfil);
console.log("Perfil actualizado:", perfilActualizado1);

console.log(" ");

// Ejemplo 2: Actualizar un solo campo
console.log("--- Ejemplo 2: Actualizar edad ---");
const perfilActualizado2 = actualizarPerfil(perfil, { edad: 26 });
console.log("Perfil actualizado:", perfilActualizado2);

console.log(" ");

// Ejemplo 3: Actualizar múltiples campos
console.log("--- Ejemplo 3: Actualizar varios campos ---");
const perfilActualizado3 = actualizarPerfil(
  perfil,
  { edad: 27 },
  { ciudad: "Medellín" },
  { profesion: "Senior Developer" }
);
console.log("Perfil actualizado:", perfilActualizado3);

console.log(" ");

// Ejemplo 4: Agregar nuevos campos
console.log("--- Ejemplo 4: Agregar nuevos campos ---");
const perfilActualizado4 = actualizarPerfil(
  perfil,
  { email: "carlos@example.com" },
  { telefono: "3001234567" }
);
console.log("Perfil actualizado:", perfilActualizado4);

// Verificamos que el perfil original no se modificó
console.log(" ");
console.log("--- Verificación de inmutabilidad ---");
console.log("Perfil original (sin cambios):", perfil);
