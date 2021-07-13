// No.4

const fs = require("fs");
let data = fs.readFileSync("./day-02/Tugas/data.csv", "utf8");
let splitData = data.split("\n").join(",").split(" ");
let arr2D = [];
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function konversiArray() {
  for (let i = 0; i < splitData.length; i++) {
    arr2D.push(splitData[i]);
  }
  return arr2D;
}

function showProducts(products) {
  let temp = "";

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (products[j][0] === alphabet[i]) {
        temp += products[j] + "\n";
      }
    }
    console.log("==== " + alphabet[i] + " ====");
    console.log(temp);
    temp = "";
  }
  return temp
}

console.log(showProducts(konversiArray()));

// Cara lain
// const fs = require('fs')
// const data = fs.readFileSync('./data.csv', 'utf8');

// let products = data.replace(/[\r\n]/g, " ").split(" ");

// for(let i = 0; i < products.length; i++) {
//     if(products[i] === "") {
//         products.splice(i,1);
//     }
// }
// console.log(products)

// function filterProduct (arr) {
//     var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for(let i = 0; i < chars.length; i++) {
//         console.log("=== " + chars[i] + " ===");

//         let filteredProducts = arr.filter((x) => x[0] === chars[i]);
//         for(let j = 0; j < filteredProducts.length; j++) {
//             console.log(filteredProducts[j]);
//         }

//         console.log("");
//         console.log("");
//     }
// }

// filterProduct(products)
