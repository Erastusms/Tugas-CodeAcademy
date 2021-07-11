// No.17
// Algoritma
/*
    1. buat fungsi countValley dengan 1 parameter
    2. deklarasi var downHill, upHill, dan jmlhGunung dengan nilai 0 sebagai nilai awal
    3. buat looping for
    3.1. ketentuannya batas maksimal adalah panjang dari parameter
    3.2. buat seleksi kondisi
    3.2.1. ketentuannya jika road indeks ke-i adalah string D, maka var downHill bertambah 1, jika tidak maka var upHill bertambah 1
    3.2.2. buat seleksi kondisi kedua
    3.2.2.1 ketentuannya jika var downHill dan var upHill kelipatan 4, maka var jmlhGunung bertambah 1
    4. mengembalikan nilai var jmlhGunung
    5. mencetak fungsi countValley
*/

function countValley(road) {
    var downHill = 0;
    var upHill = 0;
    var jmlhGunung = 0;
    for (var i = 0; i < road.length; i++) {
      if (road[i] === "D") {
        downHill++;
      } else if (road[i] === "U") {
        upHill++;
      }
      if (downHill % 2 == 0 && upHill % 2 == 0) {
        jmlhGunung++;
      }
    }
  
    return jmlhGunung + " gunung";
  }
  
  console.log(countValley("UDDUDUDU"));
  