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


//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

/* -------------------------------------------------------------------------- */
/*                              length - Property                             */
/* -------------------------------------------------------------------------- */

const metin = "Clarusway"

console.log(metin.length);

console.log(metin.toUpperCase());

let text1 = "merhaba"
let text2 = "JavaScript"

console.log(text1+ " " +text2);

let text = "merhaba"
text += "clarusway"

console.log(text);

/* -------------------------------------------------------------------------- */
/*                         concat() immutable=değişmez                        */
/* -------------------------------------------------------------------------- */

const s1 = "mola saati"
const s2 = " yaklaşıyor"  

console.log(s1.concat(s2));

const newStr = s1.concat(s2)
console.log(newStr);