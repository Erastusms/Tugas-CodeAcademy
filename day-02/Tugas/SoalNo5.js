// No.5

let numbers = [1, 2, 3, 4, 5];

function hitungSembilan(numbers) {
  let temp = ""
  for (let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < i; j++){
        if (numbers[i] + numbers[j] === 9) {
            temp += numbers[j] + "," + numbers[i]
        }
    }
  }
  return temp;
}

console.log(hitungSembilan(numbers));
