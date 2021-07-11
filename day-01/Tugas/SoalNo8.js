// No.8
// Algoritma

/**
 * 1. buat fungsi deretNegation dengan 1 parameter
 * 2. buat looping for
 * 2.1. ketentuannya awal i adalah 1 dan batas maksimal adalah parameter k
 * 2.2. pikirin caranya agar saat indeks genap termasuk 0, bilangan jadi negatif, sebaliknya positif
 * 2.3. deklarasi var yg membagi 2 agar hasil yang didapat setengah dari var k
 * 2.4. bulatkan ke atas var tsb dan tampung dalam var baru
 * 2.5. buat seleksi kondisi seperti 2.2
 * 2.6. tampilkan hasil resultAkhir
 * 3. mencetak fungsi deretNegation
 */

function deretNegation(k) {
  for (let i = 1; i <= k; i++) {
    let result = i / 2;
    let resultAkhir = Math.ceil(result);
    if (i % 2 === 0) {
      resultAkhir *= 1;
    } else {
      resultAkhir *= -1;
    }
    console.log(resultAkhir);
  }
}

deretNegation(25);