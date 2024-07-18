const notlar1 = [50, 45, 67, 75, 15]

const ellidenKucukler1 = []
const ellidenBuyukler1 = []

for(let i in notlar1){
    notlar1[i] < 50 ? ellidenKucukler1.push(notlar1[i]) : ellidenBuyukler1.push(notlar1[i])
}

console.log(ellidenKucukler1);
console.log(ellidenBuyukler1);


const notlar2 = [50, 45, 67, 47, 89, 10]
const büyükler = []
const küçükler = []

for(let not of notlar2){
    not < 50 ? küçükler.push(not) : büyükler.push(not)
}

console.log(küçükler);
console.log(büyükler);