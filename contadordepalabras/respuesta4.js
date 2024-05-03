function contarPalabras(cadena) {
    
    const palabras = cadena.split(" ");
    
    
    return palabras.length;
}

const miCadena = "El rápido zorro marrón salta sobre el perro perezoso";
const cantidadPalabras = contarPalabras(miCadena);
console.log(`Hay ${cantidadPalabras} palabras en la cadena.`);
