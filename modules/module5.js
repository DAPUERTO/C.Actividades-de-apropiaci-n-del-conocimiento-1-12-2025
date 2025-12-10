// Función que actualiza un perfil combinando múltiples objetos parciales
export const actualizarPerfil = (perfil, ...nuevosDatos) => {
  // Combinamos el perfil original con todos los nuevos datos
  // Usamos spread para mantener inmutabilidad
  // El orden importa: los últimos valores sobrescriben los anteriores
  const perfilActualizado = { ...perfil, ...Object.assign({}, ...nuevosDatos) };

  // Retornamos el nuevo perfil completo
  return perfilActualizado;
};
