var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());
const media = (a * 2.0 + b * 3.0 + c * 5.0)/10;

console.log(`MEDIA = ${media.toFixed(1)}`);