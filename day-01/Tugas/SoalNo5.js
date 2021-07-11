// No.5
// Algoritma
/**
 * 1. buat fungsi searchWord dengan 2 parameter yaitu kata dan huruf
 * 2. deklarasi var cari di set false untuk nilai awal
 * 3. buat looping for
 * 3.1 ketentuannya batas maksimal adalah panjang dari parameter kata
 * 3.2 parameter huruf mencocokan huruf yang ada di dalam indeks ke-i dari parameter kata
 * 3.3 jika huruf cocok dengan kata, maka true, jika tidak maka false
 * 4. mengembalikan nilai cari
 * 5. mencetak fungsi searchWord
 */

 function searchWord(kata, huruf) {
  let cari = false;
  for (let i = 0; i < kata.length; i++) {
    huruf === kata[i] ? cari = true : cari = false
  }
  return cari;
}

console.log(searchWord("aku suka javascript", "t"));
