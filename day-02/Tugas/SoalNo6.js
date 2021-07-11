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