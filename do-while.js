// let i = 1
// do {
//     console.log(i, "cohort-17");
//     i++
// }while(i <= 10)
//     console.log("döngü bitti");


let devam = ""

do {
    let ders = prompt("ders adınızı giriniz")
    let vize = +prompt("vize notunuzu giriniz")
    let final = +prompt("final notunuzu giriniz")
    
    let ortalama = vize * 0.3 + final * 0.7
    
    let sonuc = ortalama >= 50 ? `${ders} dersinden ${ortalama} ile geçtiniz` : `${ders} dersinden ${ortalama} ile kaldınız`
    console.log(sonuc);
    
    devam = prompt("hesaplamaya devam etmek istiyorsanız E tuşuna basınız.")
} while(devam.toLowerCase() == "e")
