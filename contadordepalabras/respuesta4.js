function contarPalabras(cadena) {
    // Divide la cadena en palabras utilizando el espacio como separador
    const palabras = cadena.split(" ");
    
    // Devuelve la cantidad de palabras
    return palabras.length;
}

// Ejemplo de uso:
const miCadena = "El rápido zorro marrón salta sobre el perro perezoso";
const cantidadPalabras = contarPalabras(miCadena);
console.log(`Hay ${cantidadPalabras} palabras en la cadena.`);
