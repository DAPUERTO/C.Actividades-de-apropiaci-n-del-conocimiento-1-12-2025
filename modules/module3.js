// Función que registra una actividad validando que tenga nombre y fecha
export const registrarActividad = (actividad) => {
  try {
    // Validamos que existan las propiedades nombre y fecha
    if (!actividad.nombre || !actividad.fecha) {
      throw new Error(
        "La actividad no es válida. Debe contener nombre y fecha."
      );
    }

    // Si todo está correcto, mostramos mensaje de confirmación
    console.log(`✓ Actividad registrada exitosamente:`);
    console.log(`  Nombre: ${actividad.nombre}`);
    console.log(`  Fecha: ${actividad.fecha}`);
  } catch (error) {
    // Capturamos el error y mostramos el mensaje
    console.log(`✗ Error: ${error.message}`);
  }
};
