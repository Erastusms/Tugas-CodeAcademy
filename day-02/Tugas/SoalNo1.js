// No.1

let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];
let gabung = fruits.concat(sayur);
let gabungReverse = gabung.reverse();

// a
fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);

// b
fruits.pop();
console.log(fruits);

// c
fruits.splice(2, 1);
console.log(fruits);

// d
fruits.splice(2, 3);
console.log(fruits);

// e
fruits.splice(2, 0, "Rambutan", "Bangkuang");
console.log(fruits);

// f
fruits.splice(4, 1, "Nangka");
console.log(fruits);

// g
console.log(gabung);
// h
console.log(gabungReverse);

function tukarSayurBuah(vege, sayur, buah){
    for(let i=0;i<vege.length;i++){
        if(vege[i] === 'Tomat') {
            vege[i] = buah;
        } else if(vege[i] === 'Jeruk') {
            vege[i] = sayur;
        }
    }
    return vege;
}

// i
console.log(tukarSayurBuah(gabung,'TOMAT','JERUK'))