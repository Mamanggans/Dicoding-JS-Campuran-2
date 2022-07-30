let x = 70;

 if(x > 80) { //bertanya pada js apakah nilai x itu lebih dari 80
    console.log(x);
} else {
    console.log("Nilai kurang dari 70"); //jika kaga maka keluarin ini 
}

/* output
Nilai kurang dari 70
*/
//  nah jika suatu yang diatas bener nih misal nya elu masukin 49 nah kan itu bener maka 
//  yang encrot tuh "49"

let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") { //nih dia ngasih pengertian kalo identik kata sama yg language 
                            // maka output nya good mowning kalo kaga yah tetep selamat pagi 
    greeting = "Good Morning!";
}

console.log(greeting);
/* output
Good Morning!
*/

// dibawah tuh die nyari yang sama ama set up language nya die cari dah tuh ampe bener baru masukin

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayogozaimasu!"
}

console.log(greeting);



/* output
Bonjour!
*/
