// No.1
// Algoritma
/**
 * 1. buat fungsi sum dengan 1 parameter
 * 2. deklarasi var angka dengan nilai 0 sebagai nilai awal
 * 3. deklarasi var newString untuk menampung hasil var parameter yg telah diubah ke dalam string dan dipecah
 * 4. buat looping for
 * 4.1 ketentuannya batas maksimal adalah panjang dari var newString
 * 4.2 di dalam for, deklarasi var newAngka untuk menampung hasil newString indeks ke-i yang diubah kembali menjadi integer
 * 4.3 var angka ditambah dengan var dari var newAngka
 * 5. mengembalikan nilai angka
 * 6. mencetak fungsi suma
 */

 function sum(n) {
    var angka = 0;
    var newString = n.toString().split("");
    for (var i = 0; i < newString.length; i++) {
      var newAngka = parseInt(newString[i]);
      angka += newAngka;
    }
    return angka;
  }
  
  console.log(sum(3456));
  