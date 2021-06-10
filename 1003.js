var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');


const [a, b] = lines.map(e => parseInt(e));

const somar = (a, b) => a + b;

console.log(`SOMA = ${somar(a, b)}`);