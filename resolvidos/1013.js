var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.shift().split(" ");
const max = Math.max(...numbers);

console.log(`${max} eh o maior`);