// No.2

const fs = require("fs");
let data = fs.readFileSync("./day-02/Tugas/data.csv", "utf8");
let splitData = data.split("\n").join(",").split(" ");
let arr2D = [];

function konversiArray() {
  for (let i = 0; i < splitData.length; i++) {
    arr2D.push(splitData[i]);
  }
  return arr2D;
}

console.log(konversiArray());