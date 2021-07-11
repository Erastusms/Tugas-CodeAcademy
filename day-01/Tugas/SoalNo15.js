// No.14

function segitiga(n, posisi) {
    let hasil = "";
    switch (posisi) {
      case "bawah":
          for (let i = 1; i <= n; i++) {
              for (let j = i; j <= n; j++) {
                hasil += " ";
              }
              for (let k = 1; k <= i; k++) {
                hasil += "*";
              }
              hasil += "\n";
            }
            return hasil;
      case "atas":
        for (i = n; i > 0; i--) {
          for (j = n; j > 0; j--) {
            if (j > i) {
              hasil += "";
            } else {
              hasil += "* ";
            }
          }
          hasil += "\n";
        }
        return hasil;
      default:
        "Pilihan yang salah";
        break;
    }
  }
  console.log(segitiga(5, "atas"));