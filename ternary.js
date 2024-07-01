//Yaşı 18 den büyük olanlar için oy kullanabilir mesajı değilse kullanamaz mesajı yazan program

let yas = 15
if (yas>18){
    console.log("Oy kullanabilir");
}
else {
    console.log("Oy kullanamaz");
}
//TERNARY İLE
//1. Tarz
// yas > 18 ? console.log("Oy kullanabilirsin") : console.log("Oy kullanamazsın");
yas > 18 ? console.log("Oy kullanabilirsin") : null;

//2. Tarz
const mesaj = yas > 18 ? "oy kullan" : "oy kullanma"
console.log(mesaj);

mesaj === "oy kullan" ? console.log("Seçim sandığına git") : console.log("Otur evde hava sıcak");

// SAYI TEK Mİ ÇİFT Mİ => TERNARY

let sayi = 6

sayi % 2 === 0 ? console.log("sayi çifttir") : console.log("sayı tektir");

let sayi2 = 35
sayi2 % 2 === 0 ? console.log("sayı çifttir") : console.log("sayı tektir");

//NESTED TERNARY
//EĞER YAŞ 14 DEN KÜÇÜK İSE ÇOCUK
//14-18 ARASI ERGEN
//18 ÜSTÜ YETİŞKİN

const age = 19
const sonuc = age <= 14 ? "Çocuk" : age <=18 ? "Ergen" : "Yetişkin"
console.log(sonuc);

//sayı negatif pozitif mi sıfırmı ternary ile

let sayıs = -5

sayıs > 0 ? console.log("sayı pozitif") : sayıs < 0 ? console.log("sayı negatif") : console.log("sayı 0");
//2. yöntem
const result = sayi >0? "pozitif" : sayi<0 ? "negatif" : "sıfır"
console.log(result);

//SHORT CIRCUIT

// && operatörü (true ise yanındaki ifadeyi çalıştırır)
let maas = 40000
let yil = 12

yil > 10 && (maas = maas * 1.5)
console.log(maas);

// || operatörü (false ise yanındaki ifadeyi çalıştırır)
//const age = 19
durum = "çocuk"
age >= 18 || (durum === "çocuk")
console.log(durum);