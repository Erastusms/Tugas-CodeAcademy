// No.6

// Algoritma
/**
 * 1. buat fungsi deretRam dengan 1 parameter
 * 2. parameter tsb menentukan banyaknya jumlah kelipatan 2
 * 3. buat var angka untuk menampung nilai 0 sebagai nilai awal
 * 4. buat looping for
 * 4.1 ketentuannya batas maksimal adalah angka dari parameter
 * 4.2 buat seleksi kondisi
 * 4.2.1 seleksi pertama, kondisi jika i = 0 maka mencetak var temp dengan koma
 * 4.2.2 seleksi kedua, kondisi jika i = angka terakhir maka var temp tidak memakai koma
 * 4.2.3 seleksi terakhir, kondisi jika i berada bukan di posisi awal maupun akhir, maka var temp dengan koma
 * 5. mengembalikan nilai temp
 * 6. mencetak fungsi deretRam
 */

 function deretRam(k) {
    let angka = 1;
    let temp = "";
    for (let i = 0; i <= k; i++) {
      if (i === 0) {
        temp += angka + ",";
      } else if (i === k) {
        angka *= 2;
        temp += angka;
      } else {
        angka *= 2;
        temp += angka + ",";
      }
    }
    return temp;
  }
  
  console.log(deretRam(7));
  