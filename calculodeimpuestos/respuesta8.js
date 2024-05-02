// Función para calcular impuestos
function calcularImpuestos(montoBase, porcentajeImpuestos) {
    // Calcula el monto de impuestos
    const impuestos = (montoBase * porcentajeImpuestos) / 100;
    // Calcula el monto total con impuestos
    const montoTotal = montoBase + impuestos;
    return montoTotal;
  }
  
  // Ejemplo de uso
  const montoBase = 100; // Monto base sin impuestos
  const porcentajeImpuestos = 10; // Porcentaje de impuestos (ejemplo: 10%)
  const montoConImpuestos = calcularImpuestos(montoBase, porcentajeImpuestos);
  
  console.log(`El monto total con impuestos es: $${montoConImpuestos}`);
  