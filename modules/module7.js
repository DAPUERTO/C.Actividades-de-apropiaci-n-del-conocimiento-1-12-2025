// Función que evalúa valores numéricos y calcula su promedio
export const evaluar = (...valores) => {
  try {
    // Verificamos que todos los valores sean numéricos
    for (let valor of valores) {
      if (typeof valor !== "number" || isNaN(valor)) {
        throw new Error(
          `Valor no numérico encontrado: ${valor} (tipo: ${typeof valor})`
        );
      }
    }

    // Si todo es válido, creamos una nueva lista usando spread (sin mutar)
    const nuevaLista = [...valores];

    // Calculamos el promedio
    const suma = nuevaLista.reduce((acc, val) => acc + val, 0);
    const promedio = suma / nuevaLista.length;

    // Mostramos información
    console.log("✓ Todos los valores son numéricos");
    console.log("Valores:", nuevaLista);
    console.log(`Suma: ${suma}`);
    console.log(`Cantidad: ${nuevaLista.length}`);
    console.log(`Promedio: ${suma} / ${nuevaLista.length} = ${promedio}`);

    // Retornamos el promedio
    return promedio;
  } catch (error) {
    // Capturamos el error y mostramos mensaje adecuado
    console.log(`✗ Error: ${error.message}`);
    console.log("No se puede calcular el promedio.");
    return null;
  }
};
