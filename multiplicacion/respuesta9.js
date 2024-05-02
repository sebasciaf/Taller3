function generarTablaMultiplicar(numero) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        const producto = numero * i;
        tabla += `${numero} x ${i} = ${producto}\n`;
    }
    console.log(tabla);
}

const numeroEjemplo = 5;
generarTablaMultiplicar(numeroEjemplo);
