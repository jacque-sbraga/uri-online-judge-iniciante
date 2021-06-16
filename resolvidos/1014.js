var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const distancia = parseInt(lines.shift());
const combustivelGasto = parseFloat(lines.shift());
const consumoMedio = (distancia / combustivelGasto).toFixed(3);

console.log(`${consumoMedio} km/l`);