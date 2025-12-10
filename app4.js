// 4. Mezcla de configuraciones con spread y destructuración
// Simula un sistema donde existen opciones por defecto y opciones personalizadas:
// const defaults = { tema: "claro", idioma: "es" };
// Crea una función configurarUsuario(defaults, personalizadas) que:
// • Use spread para combinar ambas configuraciones sin mutarlas.
// • Use destructuración para obtener el idioma configurado.
// Retorna el idioma resultante.

import { configurarUsuario } from "./modules/module4.js";

// Configuración por defecto
const defaults = { tema: "claro", idioma: "es" };

// Ejemplo 1: Sin configuraciones personalizadas
console.log("--- Ejemplo 1: Sin personalizaciones ---");
console.log("Configuración por defecto:", defaults);
const idioma1 = configurarUsuario(defaults, {});
console.log("Idioma resultante:", idioma1);

console.log(" ");

// Ejemplo 2: Con configuraciones personalizadas (cambiar tema)
console.log("--- Ejemplo 2: Cambiar tema ---");
const personalizadas2 = { tema: "oscuro" };
console.log("Configuración personalizada:", personalizadas2);
const idioma2 = configurarUsuario(defaults, personalizadas2);
console.log("Idioma resultante:", idioma2);

console.log(" ");

// Ejemplo 3: Con configuraciones personalizadas (cambiar idioma)
console.log("--- Ejemplo 3: Cambiar idioma ---");
const personalizadas3 = { idioma: "en" };
console.log("Configuración personalizada:", personalizadas3);
const idioma3 = configurarUsuario(defaults, personalizadas3);
console.log("Idioma resultante:", idioma3);

console.log(" ");

// Ejemplo 4: Con configuraciones personalizadas completas
console.log("--- Ejemplo 4: Cambiar todo ---");
const personalizadas4 = { tema: "oscuro", idioma: "fr" };
console.log("Configuración personalizada:", personalizadas4);
const idioma4 = configurarUsuario(defaults, personalizadas4);
console.log("Idioma resultante:", idioma4);

// Verificamos que las configuraciones originales no se modificaron
console.log(" ");
console.log("--- Verificación de inmutabilidad ---");
console.log("Configuración por defecto (sin cambios):", defaults);
