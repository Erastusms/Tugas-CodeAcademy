// No.16

// Algoritma
/*
    1. buat fungsi faktorial dengan 1 parameter
    2. deklarasi variabel dengan nilai 1 untuk mengeset nilai awal
    3. membuat looping for
    3.1 ketentuannya di dalam looping, variabel di langkah 2 harus mengalikan dengan variabel itu
    sendiri hingga batas looping
    4. mengembalikan nilai variabel
    5. mencetak fungsi faktorial
*/
function faktorial(k)
{
    var angka = 1;
    for (var i = 1; i <= k; i++) {
        angka *= i;
    }
    return angka;
}

console.log(faktorial(5));