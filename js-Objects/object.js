const ogrİsim = ["ahmet", "mehmet", "saffet"]

const ogrSoyisim = ["yılmaz", "can", "baki"]

console.log(`${ogrİsim[1]}-${ogrSoyisim[1]}`);

const car = new Object()

car.brand = "BMW"
car.model = 1990
car.price = 10000

console.log(car);
console.log(car.model);

let house = {} // boş obje tanımlama
house.room = 4
console.log(house);

let personel = {
    name: "Fatma",
    lastName: "Kara",
    birth: 1990,
    isMarried: true,
    experiences: ["tester", "developer", "devops"],
    adres: {city: "izmir", street: "begonya", no:5},
    calculateAge: function(){
        return new Date().getFullYear() - this.birth
    },
    selam: ()=>{
        return "merhaba"
    },
}

console.log(personel.name);
console.log(personel.lastName);
console.log(personel.birth);
console.log(personel.experiences[0]);
console.log(personel.adres.city);
console.log(personel.calculateAge());
console.log(personel.selam());

console.log(personel["birth"]);
console.log(personel["adres"]["city"]);

personel.phone = "555-55-55"
personel["nick"] = "sopalı"
console.log(personel);

personel.name = "Ayşe"
personel["lastName"] = "Yılmaz"
console.log(personel);

console.clear()