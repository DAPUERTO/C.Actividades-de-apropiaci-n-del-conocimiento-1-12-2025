// Función que calcula el total vendido del primer producto usando destructuración anidada
export const calcularTotalPrimerProducto = (ventas) => {
  // Destructuración anidada para obtener precio y unidades del primer producto
  // [0] accede al primer elemento del arreglo
  // { producto, detalles: { precio, unidades } } destructura el objeto anidado
  const [
    {
      producto,
      detalles: { precio, unidades },
    },
  ] = ventas;

  // Calculamos el total vendido
  const total = precio * unidades;

  // Mostramos la información
  console.log(`Producto: ${producto}`);
  console.log(`Precio unitario: $${precio}`);
  console.log(`Unidades vendidas: ${unidades}`);
  console.log(`Total: $${precio} × ${unidades} = $${total}`);

  // Retornamos el total
  return total;
};
