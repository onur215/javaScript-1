const names = ["ahmet", "onur", "harvey"]
console.log(names);


console.log(names[1]);
console.log(names[names.length-1]);

names[1] = names[1].toUpperCase()
console.log(names);





const lastElement = names[names.length-1]
console.log(lastElement);


const proglanguages = new Array("go", "js", "phyton")
console.log(proglanguages);

const myArr = new Array(10)
console.log(myArr);

const sayilar = Array.of(4)
console.log(sayilar);


names[names.length] = "kestane"
console.log(names);

// names.shift()
// console.log(names);



const degerler = [2, 5, 8, 20, 55]

for(let i = 0; i < degerler.length; i++){
    degerler[i] = 55    
}

console.log(degerler);