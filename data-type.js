// DATA TYPE

z = "5";
x = true;
y = "onur";
console.log(x);

console.log(typeof x);
console.log(typeof y);
console.log(z);
console.log(typeof z);

yas = 40;
sayi = 15;

sonuc = yas + sayi;
console.log(sonuc);

const pi = Math.PI;
console.log(pi);

// ROUND

let yuvarla = Math.round(pi);
console.log("ne geliyor:", yuvarla);

// trunch
let tamkisim = Math.trunc(pi);
console.log("trunc", tamkisim);

// ceil
let ceil = Math.ceil(pi);
console.log("ceil", ceil);

// floor

let floor = Math.floor(pi);
console.log("floor", floor);

// to Fixed

let fixedSonuc = pi.toFixed(3);
console.log(fixedSonuc);

// random methodu

let rastgele = Math.trunc(Math.random() * 10);
console.log(rastgele);

// üs alma
console.log(Math.pow(5, 3));

// STRİNG DATA TYPE

let isim = "onur";
let str1 = "merhaba dünya";
let str2 = `benim adım ${isim}`;

let str3 = `${str1} nasılsın`;

let str5 = new String("hello world");

console.log(typeof isim);

console.log(typeof str1);

console.log(str2);
console.log(str5);
console.log(str1[0]);
console.log(str3);

let tckn = 231564896561;
let isims = "onur";

let cumle = `müşterinin tcsi: ${tckn}dir adı:${isims}dur`;
console.log(cumle);

//   BOOLEAN

let deger = false;

let xyz = null;

console.log(Boolean(xyz));

// NULL

// UNDEFİNED

let telno;
console.log(telno);
console.log(typeof telno);

// NAN
// Not a number

let result = "gfhfg";
console.log(result);
console.log(isNaN(result));

// NON PRİMİTİVE DATA TYPES
// Array[], Object{}, Function

let personelList = ["ali", "veli", "ahmet"];
let personmelData = { name: "ali", surname: "Hakkı", age: 35 };

function hesapla() {
  // ****

  return "toplam5";
}
