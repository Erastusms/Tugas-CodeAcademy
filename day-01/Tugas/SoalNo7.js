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

deretSatu(5);