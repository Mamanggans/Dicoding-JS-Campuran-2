// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local varible, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}


// contoh nieh 

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)

/* output
400
*/

// yang dipikiran gw pasti yg keluar 9 karna gw manggil 9 eits salah cuk yang dipanggil malah fungsi 
// yang atas yg nama nya total juga ini terjadi karna gw tidak menetapkan variabel total sebagai cakupan lokal,
// kita tidak menggunakan keyword const, let, atau var ketika mendeklarasikan variabel total
//  pada fungsi multiply() sehingga variabel total menjadi global.
// liat yang bener cuk 

function multiply(num) {
    total = num * num;
     // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    return total;
  
      function total() {
        // local varible, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

let total = 9;
let number  = multiply(2);

console.log(total)

/* output
9
*/