// No.14

function segitiga(n, posisi) {
    let hasil = "";
    switch (posisi) {
      case "bawah":
        for (let i = 0; i < n; i++) {
          for (let j = 0; j <= i; j++) {
            hasil += "* ";
          }
          hasil += "\n";
        }
        return hasil;
      case "atas":
          for (let i = 1; i <= n; i++) {
              for (let j = 1; j <= i; j++) {
                hasil += " ";
              }
              for (let k = i; k <= n; k++) {
                hasil += "*";
              }
              hasil += "\n";
            }
            return hasil;
      default:
        "Pilihan yang salah";
        break;
    }
  }
  
  console.log(segitiga(5, "bawah"));