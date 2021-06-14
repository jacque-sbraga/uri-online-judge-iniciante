var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const numberEmployee = parseInt(lines.shift());
const workedHours = parseInt(lines.shift());
const valueOfHours = parseFloat(lines.shift());
const calculateSalary = (workedHours, valueOfHours) => (workedHours * valueOfHours).toFixed(2);
const salary = calculateSalary(workedHours, valueOfHours);

console.log(formateSalary`NUMBER = ${numberEmployee}SALARY = ${salary}`);
