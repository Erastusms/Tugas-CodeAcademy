// No.7
// Algoritma
/**
 * 1. buat fungsi deretSatu dengan 1 parameter
 * 2. buat var temp untuk menampung string kosong
 * 3. buat looping for
 * 3.1. ketentuannya i diawali dengan 1 dan batas maksimalnya adalah parameter k
 * 3.2. var temp menampung string "1"
 * 3.3. mencetak var temp
 * 4. mencetak fungsi deretSatu
 */

function deretSatu(k) {
  let temp = "";
  for (let i = 1; i <= k; i++) {
    temp += "1";
    console.log(temp);
  }
}

// Cara lain
// function deretSatu(k) {
//   var temp = "";

//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       temp += 1;
//     }
//     if (i < k - 1) temp += ",";
//   }
//   return temp;
// }

// deretSatu(5);
console.log(deretSatu(5));
