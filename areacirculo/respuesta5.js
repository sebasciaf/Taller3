function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}
const radio = 2; 
const areaCirculo = calcularAreaCirculo(radio);
console.log(`El área de un círculo de radio ${radio} es ${areaCirculo.toFixed(2)}`);
