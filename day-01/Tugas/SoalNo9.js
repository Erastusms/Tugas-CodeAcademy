// No.9
/*
    siapin temp = ""
    for (var i=0;i<3;i++){
        temp += Math.floor(Math.random()*10);
    }
*/

function randomPosition(k) {
  let temp = "";
  let randomAngka = "";
  let arr2D = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      randomAngka = Math.floor(Math.random() * 10);
      arr2D.push(randomAngka);
    }
    if (arr2D[i] === k) {
      temp += arr2D.join("") + "\n";
      arr2D = [];
    } else {
      arr2D = [];
      i--;
    }
  }
  console.log(temp);
}

randomPosition(7);
