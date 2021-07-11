// Cek bilangan prima

// const cekPrima = (angka) => {
//     let pembagi = 0;
//     for (let i = 1; i <= angka; i++) {
//       if (angka % i == 0) {
//         pembagi++;
//       }
//     }
//     if (pembagi == 2) {
//       console.log("Bilangan prima");
//     } else {
//       console.log("Not prima");
//     }
// }

// cekPrima(17);
// cekPrima(402);
// cekPrima(3309);

// case 1 cek xo
function compareXO(xo) {
    var flagX = 0;
    var flagO = 0;
  
    for (var i = 0; i < xo.length; i++) {
      if (xo[i] === "x") {
        flagX++;
      } else {
        flagO++;
      }
    }
  
    var result = flagX === flagO;
    return result;
  }
  
  // console.log(compareXO("xoxoxoxoxoxoxo"));
  // console.log(compareXO("xxxoo"));
  
  // case 2
  function cetakKotak(angka) {
    var temp = "";
    for (var i = 0; i < angka; i++) {
      for (var j = 0; j < angka; j++) {
        temp += "#";
      }
      console.log(temp);
      temp = "";
    }
  }
  
  // cetakKotak(5);
  // cetakKotak(3);
  
  // Case 3
  /**
   * Buat reverse dari sebuah kalimat
   *
   * var kalimat = "aku suka kamu";
   * Result : "kamu suka aku"
   *
   * var kalimat = "belajar coding itu seru banget"
   * Result : "banget seru itu coding belajar"
   */
  
  function reverseWord(str) {
    let temp = "";
    let newStr = str.split(" ");
    let len = newStr.length;
    //console.log(newStr);
    for (let i = 0; i < len; i++) {
      temp += newStr[len - 1 - i] + " ";
    }
    return temp;
  }
  
  console.log(reverseWord("Kamu suka aku"));