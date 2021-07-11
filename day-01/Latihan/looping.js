// case looping for 1
// input = 5;
// temp = "";
// for (var i = 0; i <= input; i++) {
//   temp = temp + "*";
// }
// console.log(temp);

// case looping for 2
// var drinks = 'boba'
// var temp = '';

// for(var i=0;i<drinks.length;i++){
//     if(i % 2 === 0) {
//         temp = temp + drinks[i].toUpperCase();
//     } else {
//         temp = temp + drinks[i]
//     }
// }
// console.log(temp)

// case looping for 3
/*
    var notes = "Pergi belanja sayur"
    Result: a: 2
    i: 1
    u: 1
    e: 1
    o: 0
*/
// Jawaban
var notes = "Pergi belanja sayur";
// var flagA = 0,
//   flagI = 0,
//   flagU = 0,
//   flagE = 0,
//   flagO = 0;
// for (var i = 0; i <= notes.length; i++) {
//   if (notes[i] === "a") {
//     flagA++;
//   } else if (notes[i] === "i") {
//     flagI++;
//   } else if (notes[i] === "u") {
//     flagU++;
//   } else if (notes[i] === "e") {
//     flagE++;
//   } else if (notes[i] === "o") {
//     flagO++;
//   }
// }

// console.log(flagA, flagI, flagU, flagE, flagO);

// case looping for 4
/*
    var notes = "Pergi belanja sayur"
    Result: 
    Pergi
    Belanja
    Sayur
*/
function cekLooping(str) {
  let arrNotes = str.split(" ");
  let temp = "";
  for (let i = 0; i < arrNotes.length; i++) {
    i === arrNotes.length - 1 ? temp += arrNotes[i] : temp += arrNotes[i] + "\n";
  } 
  return temp;
}
console.log(cekLooping(notes));

// Case 5
/**
 * Input : 15
 * Result :
 * 1
 * 2
 * 3 kelipatan 3
 * 4
 * 5 kelipatan 5
 * 6 kelipatan 3
 * 7
 * 8
 * 9 kelipatan 3
 * 10 kelipatan 5
 * 11
 * 12 kelipatan 3
 * 13
 * 14
 * 15 kelipatan 3 dan 5
 */