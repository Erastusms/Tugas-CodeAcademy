// No.6

function isCharUnique(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    let string = str[i];
    if (!temp[string]) {
      temp[string] = true;
    } else {
      temp[string] = false;
    }
  }
  return temp;
}

console.log(isCharUnique("abcdefg"));
console.log(isCharUnique("abcdefga"));

// Cara lain
// function isCharsUnique(chars) {
//   var result = true;

//   for(let i = 0; i < chars.length; i++) {
//       var temp = chars[i];

//       for(let j = i + 1; j < chars.length; j++) {
//           if(temp === chars[j]) {
//               result = false;
//               break;
//           }
//       }
//   }

//   return console.log(result);
// }

// isCharsUnique('abcdefg');//return true
// isCharsUnique('abcdefghijklmn'); //return false
