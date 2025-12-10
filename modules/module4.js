// Función que combina configuraciones por defecto con personalizadas
export const configurarUsuario = (defaults, personalizadas) => {
  // Usamos spread para combinar ambas configuraciones sin mutarlas
  // Las propiedades de 'personalizadas' sobrescriben las de 'defaults'
  const configuracionFinal = { ...defaults, ...personalizadas };

  // Usamos destructuración para obtener el idioma configurado
  const { idioma } = configuracionFinal;

  // Mostramos la configuración final
  console.log("Configuración final:", configuracionFinal);

  // Retornamos el idioma resultante
  return idioma;
};
