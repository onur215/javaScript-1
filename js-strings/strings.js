/* -------------------------------------------------------------------------- */
/*        STRINGLER                                                                              */
/* -------------------------------------------------------------------------- */

const str1 = "clarusway"
const str2 = "hello"
console.log(typeof(str1));

//  string instructor ile string oluşturma

const str3 = new String("world")
console.log(typeof(str3));


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.


 /* -------------------------------------------------------------------------- */
/*                         STRING YAPISI VE INDEXLEME                         */
 /* -------------------------------------------------------------------------- */

 let kelime = "Clarusway"
 console.log(kelime[0]);
 console.log(kelime[3]);
 console.log(kelime[5]);
 console.log(kelime[7]);
 console.log(kelime[9]);
 console.log(kelime[11]);

 for (let i=0; i<9; i++){
    console.log(kelime[i]);
 }
 kelime[7]="a"
 console.log(kelime);

 //! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype
