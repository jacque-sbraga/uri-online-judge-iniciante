var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const fixedSalary = parseFloat(lines[1]);
const totalSales = parseFloat(lines[2]);

const calculateBonus = (totalSales, percent) => totalSales * percent;
const totalSalary = (calculateBonus(totalSales, 0.15) + fixedSalary).toFixed(2)

console.log(`TOTAL = R$ ${totalSalary}`);