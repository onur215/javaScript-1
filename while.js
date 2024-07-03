// let i = 1

// while(i <= 10){
//    console.log(i, "cohort-17");
//    i++
// }

let number = +prompt("Norunuzu giriniz (0-100)")
while(number < 0 || number > 100) {
    console.log("Sayı 0-100 arasında olmalıdır")
    number = prompt("0-100arasında bir sayı giriniz çıkmak için Q tuşuna basınız")
    if(number.toLowerCase() === "q"){
        break
    }
}
console.log("girilen sayı:", number);
