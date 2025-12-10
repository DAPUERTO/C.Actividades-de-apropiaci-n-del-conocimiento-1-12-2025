// Función que agrega un item al inventario sin modificar el original
// Usa el operador spread (...) para crear una nueva lista
export const agregarInventario = (lista, nuevoItem) => {
    // Creamos una nueva lista usando el operador spread
    // Esto garantiza inmutabilidad (no modificamos la lista original)
    const nuevaLista = [...lista, nuevoItem];

    // Registramos un mensaje indicando la cantidad de ítems
    console.log(`\nItem agregado exitosamente!`);
    console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);

    // Retornamos la nueva lista
    return nuevaLista;
};

