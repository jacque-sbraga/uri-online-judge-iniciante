var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = raio => 3.14159 * Math.pow(raio, 2);
const r = parseFloat(lines[0]);

console.log(`A=${raio(r).toFixed(4)}`);
