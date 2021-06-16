var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const [a, b, c] = lines.shift().split(" ").map(e => parseFloat(e));
const areaTrianguloRetangulo = (base, altura) => ((base * altura)/2).toFixed(3);
const areaCirculo = raio => (3.14159 * Math.pow(raio, 2)).toFixed(3);
const areaTrapezio = (baseA, baseB, altura) => ((baseA + baseB) * altura/2).toFixed(3);
const areaQuadrado = base => (Math.pow(base, 2)).toFixed(3);
const areaRetangulo = (base, altura) => (base * altura).toFixed(3);

console.log(`TRIANGULO: ${areaTrianguloRetangulo(a, c)}`);
console.log(`CIRCULO: ${areaCirculo(c)}`);
console.log(`TRAPEZIO: ${areaTrapezio(a, b, c)}`);
console.log(`QUADRADO: ${areaQuadrado(b)}`);
console.log(`RETANGULO: ${areaRetangulo(a, b)}`);