console.log("hello");


//! girilmeyen döngü
// for(let i = 1; i == 50; i = i * 2){
//    console.log(i);
// }



//?ÖRNEK: 50 KİŞİNİN NOTUNU ALAN VE ORTALAMASINI HESAPLAYAN KODU YAZINIZ.


// for (let i = 0; i < 5; i++){
//     const grade = prompt(` Enter ${i} Grade `)
//     let sum = 0
//     sum = sum + grade  
//     console.log(`AVG ${sum / i}`);
// }

//GERİ YÖNDE DEĞİŞİM

for(let i = 10; i >= 0; i--){
    console.log(i);
}


// Örnek: iki sayı arasındaki sayıların toplamını bulan kodu yazınız

let num1 = 5
let num2 = 6
let sum = 0
if(num1 > num2){
  console.log("num2 , num1'den büyük olmalıdır");
}else{
    for(let i = num1; i <= num2; i++){
     sum += i; //sum = sum + i
    }
    console.log("SUM:",sum);
}


//BERAK - CONTİNUE

for(let i = 0; i <= 10; i++){
   if(i == 6){
    break
   }
   console.log(i);
}