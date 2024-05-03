function filtrarNumerosPares(array) {
    
    const numerosPares = array.filter(numero => numero % 2 === 0);
    return numerosPares;
  }
  
  const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = filtrarNumerosPares(miArray);
  
  console.log("Números pares:", numerosPares);
  