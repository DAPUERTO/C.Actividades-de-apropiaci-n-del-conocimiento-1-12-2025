// Función que procesa un pedido usando destructuración y parámetros rest
export const procesarPedido = (pedido, ...extras) => {
    // Destructuración del objeto pedido para extraer sus propiedades
    const { cliente, producto, cantidad } = pedido;

    // Retornar objeto consolidado con toda la información
    return {
        cliente,
        producto,
        cantidad,
        extras: extras.length > 0 ? extras : []
    };
};

