// No.9
/*
    siapin temp = ""
    for (var i=0;i<3;i++){
        temp += Math.floor(Math.random()*10);
    }
*/

function randomPosition(k) {
  let randomAngka = "";
  let randomLagi = [];
  let randomTerus = [];
  if (k >= 0 && k <= 9) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        randomAngka += Math.floor(Math.random() * 10);
      }
      randomAngka += "\n"
    }
  } else {
    console.log("Angka anda tidak valid");
  }
  console.log(randomAngka);
}

// console.log(randomPosition(7));
randomPosition(7);
