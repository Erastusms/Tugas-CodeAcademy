// No.13
// Algoritma
/**
 * 1. buat fungsi bernama maxWordLength dengan 1 parameter
 * 2. deklarasi var string baru dari parameter dengan nilai parameter yang di split menjadi array
 * 3. deklarasi var maxWord = 0 sebagai nilai awal
 * 4. membuat looping for
 * 4.1 ketentuannya batas maksimal adalah panjang dari string baru
 * 4.2 melakukan seleksi kondisi dengan ketentuan panjang indeks string baru lebih besar dari var maxWord
 * 4.3 var str menampung nilai baru dari var string baru dengan indeks ke i
 * 4.4 var maxWord mengupdate nilai panjang kata terpanjang yang dicek dari kata di dalam array string baru
 * 5. mengembalikan nilai string baru
 * 6. mencetak fungsi maxWordLength
 */
 function maxWordLength(str) {
    var newStr = str.split(" ", str.length);
    var maxWord = 0;
    for (var i = 0; i < newStr.length; i++) {
      if (newStr[i].length > maxWord) {
        str = newStr[i];
        maxWord = newStr[i].length;
      }
    }
    return str;
  }
  
  console.log(maxWordLength("aku suka bootcamp sentul city"));