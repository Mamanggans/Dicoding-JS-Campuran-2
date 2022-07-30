// strick mode 
// kegunaan 
// Menggunakan variabel sebelum mendeklarasikannya. 
// Menghapus variabel, function dan argumen.
// Menggunakan definisi object property yang berulang.
// Menggunakan definisi parameter pada function yang berulang.
// Menulis pada property jenis readonly.
// Menggunakan angka dengan penulisan oktal.
// Menulis pada property jenis get.
// Menghapus undelete property seperti pada property jenis prototype.
// Menggunakan string “eval” dan “argument” sebagai variabel.
// Menggunakan statement jenis with.
// Menggunakan future keyword reserve seperti implements, interface, package, private, protected, public, static, yield.

// contoh strick pada global mode 

"use strict";
x = 9;       // ini akan dianggap error karena variabel belum dideklarasikan
showAngka();   // ini akan dianggap error karena function belum dideklarasikan
 
function showAngka() {
  var x = 9;
  alert(x);
}

// contoh strick pad function 

x = 9;       // ini tidak dianggap error karena tidak kena mode Strict
showAngka();   // ini tidak dianggap error karena tidak kena mode Strict
 
function showAngka() {
  "use strict";
   x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
  alert(x);
}