function esPalindromo(palabra) {
    const palabraNormalizada = palabra.toLowerCase().replace(/[\W_]/g, '');
    
    const palabraInvertida = palabraNormalizada.split('').reverse().join('');
    
    return palabraNormalizada === palabraInvertida;
}

const palabraEjemplo = "reconocer"; 
console.log(`¿"${palabraEjemplo}" es un palíndromo? ${esPalindromo(palabraEjemplo)}`);
