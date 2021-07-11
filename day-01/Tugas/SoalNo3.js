// No.3
// Algoritma
/*
    1. buat fungsi howManyFrogJump dengan 3 parameter yaitu x, y, dan k
    2. deklarasi var jump = 0 untuk nilai awal
    3. buat looping for
    3.1. ketentuannya diawali dengan parameter x, batasnya adalah parameter y, dan bertambah sebanyak paramter k
    3.2 buat seleksi kondisi
    3.2.1 ketentuannya jika x lebih kecil dari y maka var jump akan selalu bertambah
    4. mengembalikan nilai var jump
    5. mencetak fungsi howManyFrogJump
*/

function howManyFrogJump(x, y, k) {
  var jump = 0;
  for (var i = x; i < y; i += k) {
    if (x < y) {
      jump++;
    }
  }
  return jump;
}

console.log(howManyFrogJump(10, 85, 30));