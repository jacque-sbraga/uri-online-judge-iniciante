var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

function points (){
    const [x1, y1] = lines.shift().split(" ").map(point => parseFloat(point));
    const [x2, y2] = lines.shift().split(" ").map(point => parseFloat(point));

    return distanceBetweenTwoPoints({x1:x1, y1:y1, x2:x2, y2:y2});
}

function distanceBetweenTwoPoints(points){
    return Math.sqrt(Math.pow(points.x2 - points.x1, 2) + 
    Math.pow(points.y2 - points.y1, 2));
}

const distance = points(lines);

console.log(distance.toFixed(4));