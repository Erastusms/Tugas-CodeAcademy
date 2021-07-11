// No.4
// Algoritma
/**
 * 1. buat fungsi howManyWord dengan 1 parameter
 * 2. buat var jumlah kata dengan nilai 0 sebagai nilai awal
 * 3. buat looping for
 * 3.1 ketentuannya batas maksimal adalah panjang kata dari parameter
 * 3.2 gunakan seleksi kondisi, jika di dalam indeks parameter tidak terdapat spasi, maka tidak terjadi apa2
 * 3.3 jika kondisi tidak terpenuhi maka var jumlah kata akan bertambah
 * 3.4 seleksi kondisi untuk mengecek indeks terakhir agar kata terakhir dapat terhitung juga
 * 4. mengembalikan nilai jumlah kata
 * 5. mencetak fungsi howManyWord
 */

// Cara panjang tanpa split
function howManyWord(s) {
    var jmlhKata = 0;
    for (var i = 0; i <= s.length; i++) {
      if (s[i] !== " ") {
      } else {
        jmlhKata++;
      }
      if (i === s.length - 1) {
        jmlhKata++;
      }
    }
    return jmlhKata;
  }
  
  // Cara singkat
  // function howManyWords(s) {
  //   return newStr = s.split(" ").length;
  // }
  
  console.log(howManyWord("aku suka javascript fullstack"));