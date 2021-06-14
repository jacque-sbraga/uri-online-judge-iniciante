var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines.map((e) => parseInt(e));
const produto = (a, b) => {
    if(b === 0){
        return 0;
    }
    else if (b < 0) {
        return - a + produto(a, b + 1);
    }
    return a + produto(a, b - 1);
}

console.log(`PROD = ${produto(a, b)}`);
