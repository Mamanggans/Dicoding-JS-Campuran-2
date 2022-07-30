
//menambahkan argument pada fungsi,

function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}
greeting("Harry", "French"); //masukin name nya dulu baru mau panggil variabel yang mana
/* output
Bonjour Harry!
*/

// function dapat mengembalikan sebuah nilai.
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)
/* output
20
*/