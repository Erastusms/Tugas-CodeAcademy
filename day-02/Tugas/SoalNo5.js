// No.5

let numbers = [1,2,3,4,5]

function hitungSembilan(numbers){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] + numbers[i] === 9) {
                    result.push(numbers[i]);
                    result.push(numbers[j]);
                }
            }
        }
    console.log(result);
}

hitungSembilan(numbers);