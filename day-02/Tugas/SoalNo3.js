// No.3

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

function filterProduct(huruf, products) {
  let arrNew = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].length; j++) {
      if (huruf === products[i][j]) {
        arrNew.push(products[i]);
      }
    }
  }
  return arrNew;
}

let products = konversiArray();

console.log(filterProduct("A", products));
console.log(filterProduct("S", products));