function ordenarArrayAscendente(arr) {
    return arr.sort((a, b) => a - b);
}

const miArray = [5, 2, 10, 1, 8];
const arrayOrdenado = ordenarArrayAscendente(miArray);

console.log("Array ordenado:", arrayOrdenado);
