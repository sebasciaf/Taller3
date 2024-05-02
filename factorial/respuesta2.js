function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // El factorial de 0 y 1 es 1
    } else {
      return n * factorial(n - 1); // n! = n * (n-1)!
    }
  }
  
  // Ejemplo de uso:
  const numero = 5;
  const resultado = factorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  