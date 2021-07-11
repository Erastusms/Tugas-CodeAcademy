// No.12
// Algoritma
/*
    1. buat fungsi showGenap dengan 1 parameter
    2. buat variabel baru untuk menampung parameter yg dijadikan ke dalam array dengan split
    3. buat variabel temp untuk menampung string kosong
    4. membuat looping for
    4.1 ketentuannya batas maksimal adalah panjang dari variable yg telah dijadikan array
    4.2 buat seleksi kondisi jika var newGenap dengan indeks ke i habis dibagi 2, maka bilangan tsb adalah genap
    4.3 mengembalikan nilai temp
    5. mencetak fungsi showGenap
*/

function showGenap(bilGenap) {
    var newGenap = bilGenap.toString().split("");
    var temp = "";
    for (var i = 0; i < newGenap.length; i++) {
      if (newGenap[i] % 2 === 0) {
        if (i === newGenap.length - 1) {
          temp += newGenap[i];
          break;
        }
        temp += newGenap[i] + ",";
      }
    }
    return temp;
  }
  
  console.log(showGenap("2345678"));