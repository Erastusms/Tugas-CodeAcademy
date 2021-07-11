// No.2
// Algoritma
/*
    1. buat fungsi reverse dengan 1 parameter
    2. ubah variabel di parameter tsb menjadi string
    3. membuat variabel temp untuk menampung string kosong
    4. membuat variabel len untuk menampung panjang kata dari parameter
    5. membuat looping for
    5.1 ketentuannya i kurang dari len
    5.2 temp menampung nilai index n ke len-i, len-i adalah indeks terakhir
    5.3 mengembalikan nilai temp
    6. mencetak fungsi reversea
*/

function reverse(n) {
    n = n.toString();
    temp = "";
    var len = n.length;
    for (var i = 1; i <= len; i++) {
      temp += n[len - i];
    }
    return temp;
  }
  
  console.log(reverse(1234));