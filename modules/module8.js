// Función que fusiona dos colecciones validando que sean arreglos
export const fusionarColecciones = (lista1, lista2) => {
  try {
    // Validamos que ambas listas sean arreglos
    if (!Array.isArray(lista1)) {
      throw new Error("El primer parámetro no es un arreglo");
    }

    if (!Array.isArray(lista2)) {
      throw new Error("El segundo parámetro no es un arreglo");
    }

    // Si todo es válido, fusionamos usando spread (sin mutar las originales)
    const coleccionFinal = [...lista1, ...lista2];

    // Mostramos información
    console.log("✓ Ambas colecciones son arreglos válidos");
    console.log(`Elementos de lista 1: ${lista1.length}`);
    console.log(`Elementos de lista 2: ${lista2.length}`);
    console.log(`Total de elementos fusionados: ${coleccionFinal.length}`);

    // Retornamos la colección final
    return coleccionFinal;
  } catch (error) {
    // Capturamos el error personalizado
    console.log(`✗ Error: ${error.message}`);
    console.log("No se puede fusionar las colecciones.");
    return null;
  }
};
