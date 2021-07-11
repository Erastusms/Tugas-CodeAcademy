// No.10
// Algoritma
/*
    1. buat fungsi palindrome dengan 1 parameter
    2. parameter dibuat menjadi huruf kecil/besar semua untuk menghindari case sensitive
    3. deklarasi variabel untuk menampung panjang kata dari parameter
    4. membuat looping for
    4.1 ketentuannya jika huruf pertama sama dengan huruf terakhir maka kata tsb palindrome
    4.2 jika tidak maka bukan palindrome
    5. mencetak fungsi palindrome
*/
function isPalindrome(s) {
    s = s.toLowerCase()
    var x = s.length;
    for (var i = 0; i < x/2; i++) {
        if (s[i] !== s[x - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('kasur ini ruSAk'));