// No.5

let numbers = [1, 2, 3, 4, 5];

function hitungSembilan(params) {
  let temp = ""
  for (let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < i; j++){
        if (numbers[i] + numbers[j] === params) {
            temp += numbers[j] + " dan " + numbers[i] + "\n"
        }
    }
  }
  return temp;
}

console.log(hitungSembilan(7));

// Cara lain
// function showElement(param) {
//     for(let i = 0; i < numbers.length; i++) {
//         var temp = numbers[i];
    
//         for(let j = i + 1; j < numbers.length; j++) {
//             if (temp + numbers[j] === param) {
//                 console.log(temp + " & " + numbers[j]);
//             }
//         }
//     }
// }

// showElement(7)