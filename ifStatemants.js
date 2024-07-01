

// Girilen sayının tek mi çift mi olduğuna karar veren program

// let sayi = Number(prompt("Bir sayı giriniz"))
// let sayi = 45
// let kalan = sayi % 2

// if (kalan===0){
//     console.log("Sayı çifttir");
// }
// else{
//     console.log("Sayı tektir");
// }

// Elektrik sinyali geliyor yada gelmiyor lamba yanar ya da yanmaz 

// let sinyal = prompt("sinyal var mı yok mu?")

// if(sinyal==="var"){
//     console.log("lamba yanar");
// }
// else{
//     console.log("lamba yanmaz");
// }

// let sinyal = prompt("sinyal durumunuzu giriniz (var/yok) :")

// if (sinyal === "var"){
//     console.log("Lamba Yanar");
// }
// else{
//     console.log("Lamba Yanmaz");
// }


// Kullanıcıdan gelen sayı negatif mi pozitig mi, sıfıra eşit mi

// let sayi = +prompt("Bir sayı giriniz:")
// if (sayi<0){
//     console.log("Sayı negatiftir");
// }
// else if(sayi===0){
//     console.log("Sayı sıfırdır");
// }
// else if (sayi>0){
//     console.log("Sayı pozitiftir");
// }
// else{
//     console.log("Geçersiz bir değer girdiniz");
// }


// Verilen 3 sayıdan en büyük olanı bulan program
// 1.YÖNTEM: JS DEKİ BUİLT İN FONKSİYON KULLANIMI
let sayi1 = 34
let sayi2 = 12
let sayi3 =144

 const enb = Math.max(sayi1,sayi2,sayi3)
 console.log(enb);

//2.YÖNTEM: NASTED İF YAPISI (İÇ İÇE İLF YAPISI) 
if (sayi1>sayi2){
    if(sayi1>sayi3){
        console.log("En büyük sayı:", sayi1);
    }
}
if (sayi2>sayi1){
    if (sayi2>sayi3){
        console.log("En büyük sayı:", sayi2);
    }
}
if (sayi3>sayi1){
    if (sayi3>sayi2){
        console.log("En büyük sayı", sayi3);
    }
}

//3.YÖNTEM: MANTIKSAL OPERATÖRLER && VE ||
if (sayi1>sayi2 && sayi1>sayi3){
    console.log("En büyük sayı:", sayi1);
}
else if (sayi2>sayi1 && sayi2>sayi3){
    console.log("En büyük sayı:", sayi2);
}
else if (sayi3>sayi1 && sayi3>sayi2){
    console.log("En büyük sayı", sayi3);
}
else{
    console.log("Geçersiz bir değer girdiniz");
}



// let sayi1 = +prompt("ilk sayıyı giriniz")
// let sayi2 = +prompt("ikinci sayı giriniz")
// let sayi3 = +prompt("üçüncü sayı giriniz")

// if (sayi1>sayi2>sayi3){
//     console.log($sayi1`en büyüktür`);
// }
// else{
//     console.log("yanlış");
// }
