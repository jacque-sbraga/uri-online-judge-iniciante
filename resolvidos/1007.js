var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');


const [a, b, c, d] = lines.map(e => parseInt(e));
const diferenca = (a * b) - (c * d);

console.log("DIFERENCA = " + diferenca);