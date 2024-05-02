function filtrarNumerosPares(array) {
    // Filtramos los números pares utilizando el método .filter()
    const numerosPares = array.filter(numero => numero % 2 === 0);
    return numerosPares;
  }
  
  // Ejemplo de uso:
  const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = filtrarNumerosPares(miArray);
  
  console.log("Números pares:", numerosPares);
  