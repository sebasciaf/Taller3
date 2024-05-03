function calcularImpuestos(montoBase, porcentajeImpuestos) {
    // Calcula el monto de impuestos
    const impuestos = (montoBase * porcentajeImpuestos) / 100;
    // Calcula el monto total con impuestos
    const montoTotal = montoBase + impuestos;
    return montoTotal;
  }
  

  const montoBase = 100;
  const porcentajeImpuestos = 10; 
  const montoConImpuestos = calcularImpuestos(montoBase, porcentajeImpuestos);
  
  console.log(`El monto total con impuestos es: $${montoConImpuestos}`);
  