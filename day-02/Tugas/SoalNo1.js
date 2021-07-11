// No.1

let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];
let gabung = fruits.concat(sayur);
let gabungReverse = gabung.reverse();

fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

fruits.splice(2, 3);
console.log(fruits);

fruits.splice(2, 0, "Rambutan", "Bangkuang");
console.log(fruits);

fruits.splice(4, 1, "Nangka");
console.log(fruits);

console.log(gabung);
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

console.log(tukarSayurBuah(gabung,'TOMAT','JERUK'))