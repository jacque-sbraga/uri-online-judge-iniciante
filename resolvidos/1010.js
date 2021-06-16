var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");


const product1 = lines.shift().split(" ");
const idProduct1 = product1.shift();
const quantityProduct1 = parseInt(product1.shift());
const priceProduct1 = parseFloat(product1.shift());

const product2 = lines.shift().split(" ");
const idProduct2 = product2.shift();
const quantityProduct2 = parseInt(product2.shift());
const priceProduct2 = parseFloat(product2.shift());

const total = (priceProduct1 * quantityProduct1) + (priceProduct2 * quantityProduct2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
