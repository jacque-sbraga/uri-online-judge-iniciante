var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

//fórmula para calcular o volume é: (4/3) * pi * R3. 

const PI = 3.14159;
const raio = parseFloat(lines.shift());
const calculateVolume = raio => (4/3) * PI * Math.pow(raio, 3);
const volumeSphere = calculateVolume(raio);

console.log(`VOLUME = ${volumeSphere.toFixed(3)}`);